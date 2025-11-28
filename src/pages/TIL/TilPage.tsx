import React, { useState, useEffect } from 'react';
import { Search, BookOpen, PenTool } from 'lucide-react';
import Button from '@components/Button';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import TilCard from './TilCard';
import WriteModal from './WriteModal';
import ReadModal from './ReadModal';
import { fetchTilPosts, subscribeTilPosts, deleteTilPost } from '@lib/supabase';

interface Post {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at: string;
}

const TilPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tils, setTils] = useState<Post[]>([]);
  const [isWriteOpen, setIsWriteOpen] = useState<boolean>(false);
  const [readPost, setReadPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTilPosts();
        setTils(data);
        setLoading(false);
      } catch (error) {
        console.error("Supabase Error:", error);
        setLoading(false);
      }
    };

    loadData();

    const subscription = subscribeTilPosts((data) => {
      setTils(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    try {
      await deleteTilPost(id);
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting post. Please try again.");
    }
  };

  const filtered = tils.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleWriteClick = () => {
    const password = prompt('TIL 작성 비밀번호를 입력하세요:');
    const correctPassword = import.meta.env.VITE_TIL_PASSWORD || 'admin1234';
    
    if (password === correctPassword) {
      setIsWriteOpen(true);
    } else if (password !== null) {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Today I Learned</h1>
          <p className="text-slate-500 mt-1">Live Supabase DB • Markdown Supported</p>
        </div>
        <Button 
          onClick={handleWriteClick} 
          className="shrink-0 shadow-md"
        >
          <PenTool className="mr-2 h-4 w-4" /> Write Post
        </Button>
      </div>

      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 group-focus-within:text-blue-500 transition-colors" />
        <Input 
          placeholder="Search by keyword or tag..."
          className="pl-10 h-12 text-base bg-white shadow-sm border-slate-200 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {loading ? (
          <Spinner />
        ) : filtered.length > 0 ? (
          filtered.map(post => (
            <TilCard 
              key={post.id} 
              post={post} 
              onDelete={handleDelete} 
              onClick={() => setReadPost(post)}
            />
          ))
        ) : (
          <div className="text-center py-24 rounded-xl border border-dashed border-slate-300 bg-slate-50/50">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm mb-4 border border-slate-100">
              <BookOpen className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">No posts found</h3>
            <p className="text-slate-500 max-w-sm mx-auto mt-2 mb-6">
              {searchTerm 
                ? 'Try adjusting your search terms.' 
                : 'Write your first TIL to start building your knowledge base.'}
            </p>
            {!searchTerm && (
              <Button variant="outline" onClick={() => setIsWriteOpen(true)}>
                Create Post
              </Button>
            )}
          </div>
        )}
      </div>

      <WriteModal 
        isOpen={isWriteOpen} 
        onClose={() => setIsWriteOpen(false)}
      />
      
      <ReadModal
        post={readPost}
        onClose={() => setReadPost(null)}
      />
    </div>
  );
};

export default TilPage;
