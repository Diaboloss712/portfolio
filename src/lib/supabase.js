import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const subscribeTilPosts = (callback) => {
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
          callback(data);
        }
      }
    )
    .subscribe();

  return {
    unsubscribe: () => subscription.unsubscribe()
  };
};

export const fetchTilPosts = async () => {
  const { data, error } = await supabase
    .from('tils')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching TIL posts:', error);
    throw error;
  }

  return data || [];
};

export const createTilPost = async (postData) => {
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

  return data;
};

export const deleteTilPost = async (id) => {
  const { error } = await supabase
    .from('tils')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting TIL post:', error);
    throw error;
  }
};
