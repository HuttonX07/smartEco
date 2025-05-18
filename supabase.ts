import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bculjcmvpdhcqdybcnqx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdWxqY212cGRoY3FkeWJjbnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDk5MTUsImV4cCI6MjA2MTc4NTkxNX0.aOOvC0T9hl1yj7ZAA6hHCqgq5YXW6Jp4Fx9iB3N9po4';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);