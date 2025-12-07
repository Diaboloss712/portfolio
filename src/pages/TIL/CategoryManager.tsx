import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import { fetchCategories, createCategory, deleteCategory, Category } from '@lib/supabase';

interface CategoryManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryManager: React.FC<CategoryManagerProps> = ({ isOpen, onClose }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadCategories();
    }
  }, [isOpen]);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleAdd = async () => {
    if (!newCategory.trim()) return;
    
    setLoading(true);
    try {
      await createCategory(newCategory.trim());
      setNewCategory('');
      await loadCategories();
    } catch (error) {
      console.error('Failed to create category:', error);
      alert('카테고리 생성 실패');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('이 카테고리를 삭제하시겠습니까?')) return;
    
    try {
      await deleteCategory(id);
      await loadCategories();
    } catch (error) {
      console.error('Failed to delete category:', error);
      alert('카테고리 삭제 실패');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white hover:bg-slate-100 z-10 shadow-lg"
        >
          <X size={20} />
        </Button>
        
        <Card className="w-full shadow-2xl animate-in zoom-in duration-200 border-none">
          <CardHeader className="border-b pb-4">
            <CardTitle>카테고리 관리</CardTitle>
            <CardDescription>TIL 글의 카테고리를 추가하거나 삭제할 수 있습니다.</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4 pt-6">
            <div className="flex gap-2">
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="새 카테고리 이름"
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                className="flex-1"
              />
              <Button 
                onClick={handleAdd} 
                disabled={loading || !newCategory.trim()}
                className="shrink-0"
              >
                <Plus className="h-4 w-4 mr-1" />
                추가
              </Button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {categories.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  등록된 카테고리가 없습니다.
                </div>
              ) : (
                categories.map((category) => (
                  <div 
                    key={category.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-900">{category.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(category.id)}
                      className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoryManager;
