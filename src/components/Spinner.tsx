import React from 'react';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 32, 
  className = "", 
  fullScreen = false 
}) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-3">
          <Loader2 
            size={size} 
            className={`animate-spin text-blue-600 ${className}`} 
          />
          <p className="text-sm text-slate-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      <Loader2 
        size={size} 
        className={`animate-spin text-blue-600 ${className}`} 
      />
    </div>
  );
};

export default Spinner;
