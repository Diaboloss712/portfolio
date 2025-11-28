export const formatDate = (date: Date | string | null): string => {
  if (!date) return 'Draft';
  
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const parseTags = (tagsString: string): string[] => {
  return tagsString
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean);
};

export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    'Completed': 'bg-blue-500',
    'Live': 'bg-emerald-500',
    'In Progress': 'bg-amber-500',
    'Prototype': 'bg-purple-500',
    'Archived': 'bg-slate-400'
  };
  return colors[status] || 'bg-slate-400';
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T, 
  wait: number = 300
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      if (timeout) clearTimeout(timeout);
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
