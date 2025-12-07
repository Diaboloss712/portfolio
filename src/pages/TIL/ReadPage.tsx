import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Calendar } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import Button from '@components/Button';
import Badge from '@components/Badge';
import { fetchTilPosts, deleteTilPost, TilPost } from '@lib/supabase';
import { formatDate } from '@utils/helpers';
import { personalInfo } from '@utils/constants';

const ReadPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<TilPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      const posts = await fetchTilPosts();
      const foundPost = posts.find(p => p.id === id);
      setPost(foundPost || null);
    } catch (error) {
      console.error('Failed to load post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    const password = prompt('TIL 수정 비밀번호를 입력하세요:');
    const correctPassword = import.meta.env.VITE_TIL_PASSWORD || 'admin1234';
    
    if (password === correctPassword) {
      navigate(`/til/edit/${id}`);
    } else if (password !== null) {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleDelete = async () => {
    const password = prompt('TIL 삭제 비밀번호를 입력하세요:');
    const correctPassword = import.meta.env.VITE_TIL_PASSWORD || 'admin1234';
    
    if (password !== correctPassword) {
      if (password !== null) {
        alert('비밀번호가 올바르지 않습니다.');
      }
      return;
    }

    if (!confirm('정말로 이 글을 삭제하시겠습니까?')) {
      return;
    }

    try {
      await deleteTilPost(id!);
      navigate('/til');
    } catch (error) {
      console.error('Failed to delete post:', error);
      alert('삭제 실패');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-slate-500">로딩 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">글을 찾을 수 없습니다.</p>
          <Button onClick={() => navigate('/til')}>목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50" data-color-mode="light">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                onClick={handleEdit}
                className="flex items-center gap-2"
              >
                <Edit size={16} />
                <span className="hidden sm:inline">수정</span>
              </Button>
              <Button
                variant="outline"
                onClick={handleDelete}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:border-red-300"
              >
                <Trash2 size={16} />
                <span className="hidden sm:inline">삭제</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8 sm:p-12">
          {/* Category Badge */}
          <div className="mb-6">
            <Badge className="text-sm">{post.category}</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.created_at)}
            </span>
            <span>•</span>
            <span>{personalInfo.name}</span>
          </div>

          {/* Summary */}
          {post.summary && (
            <p className="text-xl text-slate-600 mb-8 pb-8 border-b border-slate-200 leading-relaxed">
              {post.summary}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            <MDEditor.Markdown source={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

export default ReadPage;
