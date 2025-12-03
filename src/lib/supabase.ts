import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjU0MjQwMCwiZXhwIjoxOTU4MTE4NDAwfQ.example';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Supabase 설정 상태 확인
export const isSupabaseConfigured = () => {
  return import.meta.env.VITE_SUPABASE_URL && 
         import.meta.env.VITE_SUPABASE_ANON_KEY &&
         import.meta.env.VITE_SUPABASE_URL !== 'your-supabase-url';
};

export interface TilPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at: string;
}

export interface TilPostInput {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  created_at?: string;
}

interface Subscription {
  unsubscribe: () => Promise<'ok' | 'timed out' | 'error'>;
}

export const subscribeTilPosts = (callback: (data: TilPost[]) => void): Subscription => {
  const subscription = supabase
    .channel('tils-channel')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'tils' },
      async () => {
        const { data, error } = await supabase
          .from('tils')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (!error && data) {
          callback(data as TilPost[]);
        }
      }
    )
    .subscribe();

  return {
    unsubscribe: () => subscription.unsubscribe()
  };
};

export const fetchTilPosts = async (): Promise<TilPost[]> => {
  const { data, error } = await supabase
    .from('tils')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching TIL posts:', error);
    throw error;
  }

  return (data as TilPost[]) || [];
};

export const createTilPost = async (postData: TilPostInput): Promise<TilPost> => {
  const { data, error } = await supabase
    .from('tils')
    .insert([{
      ...postData,
      created_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating TIL post:', error);
    throw error;
  }

  return data as TilPost;
};

export const deleteTilPost = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('tils')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting TIL post:', error);
    throw error;
  }
};
