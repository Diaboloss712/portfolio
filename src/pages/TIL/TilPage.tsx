import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, PenTool } from 'lucide-react';
import Button from '@components/Button';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import TilCard from './TilCard';
import { fetchTilPosts, subscribeTilPosts } from '@lib/supabase';

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
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tils, setTils] = useState<Post[]>([]);
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

  const filtered = tils.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleWriteClick = () => {
    const password = prompt('TIL 작성 비밀번호를 입력하세요:');
    const correctPassword = import.meta.env.VITE_TIL_PASSWORD || 'admin1234';
    
    if (password === correctPassword) {
      navigate('/til/write');
    } else if (password !== null) {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Today I Learned</h1>
          <p className="text-slate-500 mt-2">개발하며 배운 것들을 기록합니다</p>
        </div>
        <Button 
          onClick={handleWriteClick} 
          className="shrink-0 bg-green-600 hover:bg-green-700"
        >
          <PenTool className="mr-2 h-4 w-4" /> 새 글 작성
        </Button>
      </div>

      <div className="relative group mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-green-500 transition-colors" />
        <Input 
          placeholder="검색어를 입력하세요..."
          className="pl-12 h-14 text-base bg-white shadow-sm border-slate-200 focus:border-green-500 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Spinner size={40} />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">
            {searchTerm ? '검색 결과가 없습니다' : '아직 작성된 글이 없습니다'}
          </h3>
          <p className="text-slate-500 mb-6">
            {searchTerm ? '다른 검색어를 입력해보세요' : '첫 번째 글을 작성해보세요'}
          </p>
          {!searchTerm && (
            <Button 
              onClick={handleWriteClick}
              className="bg-green-600 hover:bg-green-700"
            >
              <PenTool className="mr-2 h-4 w-4" /> 새 글 작성
            </Button>
          )}
        </div>
      ) : (
        <div className="grid gap-6">
          {filtered.map(post => (
            <TilCard 
              key={post.id} 
              post={post} 
              onClick={() => navigate(`/til/${post.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TilPage;
