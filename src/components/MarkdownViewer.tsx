import React from 'react';
import { Code2 } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  const renderLine = (line: string, index: number | string) => {
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-slate-200">{line.slice(2)}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-bold mt-6 mb-4">{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.slice(4)}</h3>;
    }
    if (line.startsWith('- ')) {
      return <li key={index} className="ml-4 list-disc text-slate-700 mb-1 pl-1">{line.slice(2)}</li>;
    }
    if (line.startsWith('> ')) {
      return (
        <blockquote key={index} className="border-l-4 border-slate-300 pl-4 py-1 my-4 text-slate-600 italic bg-slate-50 rounded-r">
          {line.slice(2)}
        </blockquote>
      );
    }
    
    if (line.startsWith('```')) return null; 
    if (line.trim().length === 0) {
      return <div key={index} className="h-4" />;
    }
    const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
    if (imgMatch) {
      return (
        <div key={index} className="my-6 rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
          <img 
            src={imgMatch[2]} 
            alt={imgMatch[1]} 
            className="w-full h-auto object-contain max-h-[500px]" 
            onError={(e) => (e.target as HTMLImageElement).style.display='none'} 
          />
          {imgMatch[1] && (
            <p className="text-center text-xs text-slate-500 py-2 border-t border-slate-200 bg-white">
              {imgMatch[1]}
            </p>
          )}
        </div>
      );
    }

    if (line.startsWith('|')) {
      const cells = line.split('|').filter(c => c.trim() !== '');
      if (line.includes('---')) return null;
      return (
        <div key={index} className="grid grid-flow-col auto-cols-fr gap-2 my-1 p-2 bg-slate-50 border border-slate-200 rounded text-sm">
          {cells.map((c, i) => <span key={i} className="font-medium px-2">{c}</span>)}
        </div>
      );
    }

    return <p key={index} className="text-slate-700 leading-7 mb-2">{line}</p>;
  };

  const parts = content.split(/(```[\s\S]*?```)/g);
  
  return (
    <div className="markdown-body text-base">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const firstLineEnd = part.indexOf('\n');
          const codeContent = part.slice(firstLineEnd + 1, -3);
          const lang = part.slice(3, firstLineEnd).trim();
          
          return (
            <div key={i} className="my-6 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
              {lang && (
                <div className="px-4 py-1.5 bg-slate-900 text-xs text-slate-400 font-mono border-b border-slate-800 flex items-center gap-1">
                  <Code2 size={12}/> {lang}
                </div>
              )}
              <div className="p-4 overflow-x-auto">
                <pre className="text-slate-50 font-mono text-sm leading-relaxed">{codeContent}</pre>
              </div>
            </div>
          );
        }
        return part.split('\n').map((line, j) => renderLine(line, `${i}-${j}`));
      })}
    </div>
  );
};

export default MarkdownViewer;
