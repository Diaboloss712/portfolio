import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import { createTilPost, updateTilPost, fetchCategories, Category, TilPost } from '@lib/supabase';
import { parseTags } from '@utils/helpers';

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  editPost?: TilPost | null;
}

interface FormData {
  title: string;
  category: string;
  summary: string;
  tags: string;
  content: string;
}

const WriteModal: React.FC<WriteModalProps> = ({ isOpen, onClose, editPost }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    summary: '',
    tags: '',
    content: ''
  });

  useEffect(() => {
    if (isOpen) {
      loadCategories();
      if (editPost) {
        setFormData({
          title: editPost.title,
          category: editPost.category,
          summary: editPost.summary,
          tags: editPost.tags.join(', '),
          content: editPost.content
        });
      }
    }
  }, [isOpen, editPost]);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
      if (data.length > 0 && !formData.category && !editPost) {
        setFormData(prev => ({ ...prev, category: data[0].name }));
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      const postData = {
        ...formData,
        tags: parseTags(formData.tags)
      };

      if (editPost) {
        await updateTilPost(editPost.id, postData);
      } else {
        await createTilPost(postData);
      }
      
      onClose();
      setFormData({ title: '', category: '', summary: '', tags: '', content: '' });
    } catch (error) {
      console.error("Error saving document:", error);
      alert("Error saving post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white hover:bg-slate-100 z-10 shadow-lg"
        >
          <X size={20} />
        </Button>
        <Card className="w-full shadow-2xl animate-in zoom-in duration-200 border-none flex flex-col max-h-[90vh]">
          <CardHeader className="border-b pb-4 shrink-0">
            <CardTitle>{editPost ? 'Edit TIL' : 'Create TIL'}</CardTitle>
            <CardDescription>Write using Markdown with live preview.</CardDescription>
          </CardHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden h-full">
          <CardContent className="space-y-5 pt-6 overflow-y-auto flex-1 custom-scrollbar">
            <Input 
              required
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              placeholder="Post Title"
              className="text-lg font-bold h-12"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Category
                </label>
                <select
                  className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  required
                >
                  {categories.length === 0 ? (
                    <option value="">No categories available</option>
                  ) : (
                    categories.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))
                  )}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tags
                </label>
                <Input
                  value={formData.tags}
                  onChange={e => setFormData({...formData, tags: e.target.value})}
                  placeholder="tag1, tag2, tag3"
                  className="h-10"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Summary
              </label>
              <Input
                required
                value={formData.summary}
                onChange={e => setFormData({...formData, summary: e.target.value})}
                placeholder="Brief summary of the post"
              />
            </div>

            <div className="space-y-1.5 flex-1 flex flex-col" data-color-mode="light">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Content (Markdown)
              </label>
              <MDEditor
                value={formData.content}
                onChange={(val) => setFormData({...formData, content: val || ''})}
                preview="live"
                height={400}
                textareaProps={{
                  placeholder: 'Write your content in markdown...'
                }}
              />
            </div>
          </CardContent>

          <CardFooter className="border-t pt-4 shrink-0">
            <div className="flex gap-3 w-full">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {editPost ? 'Updating...' : 'Publishing...'}
                  </>
                ) : (
                  editPost ? 'Update' : 'Publish'
                )}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
      </div>
    </div>
  );
};

export default WriteModal;
