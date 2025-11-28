import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import { createTilPost } from '@lib/supabase';
import { parseTags } from '@utils/helpers';
import { categories } from '@utils/constants';

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  title: string;
  category: string;
  summary: string;
  tags: string;
  content: string;
}

const WriteModal: React.FC<WriteModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: 'Backend',
    summary: '',
    tags: '',
    content: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      await createTilPost({
        ...formData,
        tags: parseTags(formData.tags)
      });
      
      onClose();
      setFormData({ title: '', category: 'Backend', summary: '', tags: '', content: '' });
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Error saving post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="w-full max-w-2xl shadow-2xl animate-in zoom-in duration-200 border-none flex flex-col max-h-[90vh]">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4 shrink-0">
          <div>
            <CardTitle>Create TIL</CardTitle>
            <CardDescription>Write using Markdown. Images via URL.</CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="h-8 w-8 rounded-full"
          >
            <X size={18} />
          </Button>
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
                >
                  {categories.til.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
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

            <div className="space-y-1.5 flex-1 flex flex-col">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Content (Markdown)
              </label>
              <Textarea
                required
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                placeholder="Write your content in markdown..."
                className="min-h-[250px] flex-1 font-mono text-sm resize-none"
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
                    Publishing...
                  </>
                ) : (
                  'Publish'
                )}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default WriteModal;
