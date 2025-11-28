import React from 'react';
import { X, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@components/Card';
import Badge from '@components/Badge';
import Button from '@components/Button';
import MarkdownViewer from '@components/MarkdownViewer';
import { formatDate } from '@utils/helpers';
import { personalInfo } from '@utils/constants';
import { TilPost } from '@lib/supabase';

interface ReadModalProps {
  post: TilPost | null;
  onClose: () => void;
}

const ReadModal: React.FC<ReadModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="w-full max-w-4xl shadow-2xl animate-in zoom-in duration-200 border-none flex flex-col max-h-[90vh]">
        <CardHeader className="border-b pb-4 shrink-0 bg-white rounded-t-xl z-10 relative">
          <div className="absolute top-4 right-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose} 
              className="h-8 w-8 rounded-full hover:bg-slate-100"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
          </div>
          
          <CardTitle className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-slate-900">
            {post.title}
          </CardTitle>
          
          <div className="flex items-center gap-3 mt-4 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar size={14}/> {formatDate(post.created_at)}
            </span>
            <span>•</span>
            <span>{personalInfo.name}</span>
          </div>
        </CardHeader>
        
        <CardContent className="overflow-y-auto p-8 bg-white custom-scrollbar">
          <MarkdownViewer content={post.content || post.summary} />
        </CardContent>

        <CardFooter className="border-t pt-4 bg-slate-50 rounded-b-xl shrink-0 justify-between">
          <div className="flex gap-2">
            {post.tags && post.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="font-normal text-slate-500 bg-white border border-slate-200"
              >
                #{tag}
              </Badge>
            ))}
          </div>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReadModal;
