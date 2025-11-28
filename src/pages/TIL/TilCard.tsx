import React from 'react';
import { Calendar, Hash, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@components/Card';
import { formatDate } from '@utils/helpers';
import { TilPost } from '@lib/supabase';

interface TilCardProps {
  post: TilPost;
  onDelete?: (id: string) => void;
  onClick: () => void;
}

const TilCard: React.FC<TilCardProps> = ({ post, onDelete, onClick }) => (
  <Card onClick={onClick} className="group relative hover:border-slate-400 transition-all cursor-pointer hover:shadow-md">
    {onDelete && (
      <button 
        onClick={(e) => { 
          e.stopPropagation(); 
          onDelete(post.id); 
        }}
        className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Delete post"
      >
        <Trash2 size={16} />
      </button>
    )}
    
    <CardHeader className="pb-3">
      <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 font-medium">
        <Calendar size={12} className="text-slate-400"/>
        <span>{formatDate(post.created_at)}</span>
        <span className="text-slate-300">|</span>
        <span className="text-blue-600">{post.category}</span>
      </div>
      <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
        {post.title}
      </CardTitle>
    </CardHeader>
    
    <CardContent>
      <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
        {post.summary}
      </p>
    </CardContent>
    
    <CardFooter className="pt-0">
      <div className="flex gap-2 flex-wrap">
        {post.tags && post.tags.map(tag => (
          <span 
            key={tag} 
            className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1 border border-slate-200 group-hover:border-slate-300 transition-colors"
          >
            <Hash size={10} className="text-slate-400" /> {tag}
          </span>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default TilCard;
