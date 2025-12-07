import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import Button from '@components/Button';
import Input from '@components/Input';
import { createTilPost, updateTilPost, fetchTilPosts, fetchCategories, createCategory, Category } from '@lib/supabase';
import { parseTags } from '@utils/helpers';

const WritePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    summary: '',
    tags: '',
    content: ''
  });

  useEffect(() => {
    loadCategories();
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
      if (data.length > 0 && !formData.category) {
        setFormData(prev => ({ ...prev, category: data[0].name }));
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const loadPost = async () => {
    try {
      const posts = await fetchTilPosts();
      const post = posts.find(p => p.id === id);
      if (post) {
        setFormData({
          title: post.title,
          category: post.category,
          summary: post.summary,
          tags: post.tags.join(', '),
          content: post.content
        });
      }
    } catch (error) {
      console.error('Failed to load post:', error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;
    
    try {
      await createCategory(newCategoryName.trim());
      setNewCategoryName('');
      setShowCategoryInput(false);
      await loadCategories();
    } catch (error) {
      console.error('Failed to create category:', error);
      alert('카테고리 생성 실패');
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.category || !formData.summary || !formData.content) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const postData = {
        ...formData,
        tags: parseTags(formData.tags)
      };

      if (id) {
        await updateTilPost(id, postData);
      } else {
        await createTilPost(postData);
      }
      
      navigate('/til');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('저장 실패. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" data-color-mode="light">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => navigate('/til')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">목록으로</span>
            </Button>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => window.open(`/til/preview/${id || 'new'}`, '_blank')}
                className="hidden sm:flex items-center gap-2"
              >
                <Eye size={16} />
                미리보기
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <Save size={16} />
                {loading ? '저장 중...' : id ? '수정하기' : '출간하기'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Split View */}
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
          {/* Left - Editor */}
          <div className="border-r border-slate-200 flex flex-col">
            <div className="p-6 space-y-4 flex-shrink-0">
              {/* Title */}
              <Input
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                placeholder="제목을 입력하세요"
                className="text-4xl font-bold border-0 shadow-none px-0 h-auto focus-visible:ring-0 placeholder:text-slate-300"
              />

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3">
                {/* Category */}
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={e => {
                      if (e.target.value === '__add_new__') {
                        setShowCategoryInput(true);
                      } else {
                        setFormData({...formData, category: e.target.value});
                      }
                    }}
                    className="h-9 px-3 pr-8 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="__add_new__">+ 새 카테고리</option>
                  </select>
                </div>

                {/* Tags */}
                <Input
                  value={formData.tags}
                  onChange={e => setFormData({...formData, tags: e.target.value})}
                  placeholder="태그 (쉼표로 구분)"
                  className="flex-1 h-9 text-sm"
                />
              </div>

              {/* New Category Input */}
              {showCategoryInput && (
                <div className="flex gap-2 p-3 bg-slate-50 rounded-md">
                  <Input
                    value={newCategoryName}
                    onChange={e => setNewCategoryName(e.target.value)}
                    placeholder="새 카테고리 이름"
                    className="flex-1 h-9"
                    onKeyDown={e => e.key === 'Enter' && handleAddCategory()}
                    autoFocus
                  />
                  <Button onClick={handleAddCategory} className="h-9">추가</Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowCategoryInput(false);
                      setNewCategoryName('');
                    }}
                    className="h-9"
                  >
                    취소
                  </Button>
                </div>
              )}

              {/* Summary */}
              <Input
                required
                value={formData.summary}
                onChange={e => setFormData({...formData, summary: e.target.value})}
                placeholder="글 요약을 입력하세요"
                className="text-sm text-slate-600"
              />
            </div>

            {/* Markdown Editor */}
            <div className="flex-1 px-6 pb-6">
              <MDEditor
                value={formData.content}
                onChange={(val) => setFormData({...formData, content: val || ''})}
                preview="edit"
                height="100%"
                textareaProps={{
                  placeholder: '당신의 이야기를 적어보세요...'
                }}
                className="border-0 shadow-none"
              />
            </div>
          </div>

          {/* Right - Preview */}
          <div className="bg-slate-50 p-6 lg:p-12 overflow-y-auto">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {formData.title || '제목을 입력하세요'}
              </h1>
              
              {formData.summary && (
                <p className="text-lg text-slate-600 mb-6 pb-6 border-b border-slate-200">
                  {formData.summary}
                </p>
              )}

              <div className="prose prose-slate max-w-none">
                <MDEditor.Markdown 
                  source={formData.content || '*내용을 입력하세요...*'} 
                />
              </div>

              {formData.tags && (
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200">
                  {parseTags(formData.tags).map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
