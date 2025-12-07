import React from 'react';
import { Calendar } from 'lucide-react';
import { formatDate } from '@utils/helpers';
import { TilPost } from '@lib/supabase';

interface TilCardProps {
  post: TilPost;
  onClick: () => void;
}

const TilCard: React.FC<TilCardProps> = ({ post, onClick }) => (
  <article 
    onClick={onClick} 
    className="group p-6 bg-white border border-slate-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all cursor-pointer"
  >
    <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
      <span className="px-2 py-1 bg-green-50 text-green-700 font-medium rounded">
        {post.category}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={12} />
        {formatDate(post.created_at)}
      </span>
    </div>
    
    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
      {post.title}
    </h2>
    
    <p className="text-slate-600 text-base line-clamp-3 leading-relaxed mb-4">
      {post.summary}
    </p>
    
    {post.tags && post.tags.length > 0 && (
      <div className="flex gap-2 flex-wrap">
        {post.tags.map(tag => (
          <span 
            key={tag} 
            className="text-sm text-slate-600 hover:text-green-700 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}
  </article>
);

export default TilCard;
