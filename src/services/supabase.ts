import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder_key'
)

export const createAuthenticatedSupabaseClient = async (
  getToken: (options?: { template?: string }) => Promise<string | null>
) => {
  const token = await getToken({ template: 'supabase' });
  
  if (!token) {
    console.warn('No Supabase token found, falling back to anon client');
    return supabase;
  }

  return createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder_key',
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
};

// SQL Schema for reference:
/*
-- Users table (synced from Clerk via webhook or client-side check)
create table public.users (
  id text primary key, -- Clerk User ID
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Social Accounts table
create table public.social_accounts (
  id uuid default gen_random_uuid() primary key,
  user_id text references public.users(id) not null,
  platform text not null, -- youtube, twitter, tiktok, instagram
  platform_user_id text,
  handle text not null,
  followers int default 0,
  engagement_rate float default 0,
  verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, platform)
);

-- Valuations table
create table public.valuations (
  id uuid default gen_random_uuid() primary key,
  user_id text references public.users(id) not null,
  total_followers int,
  avg_engagement float,
  market_cap float,
  score float,
  report_json jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tokens table
create table public.tokens (
  mint_address text primary key,
  user_id text references public.users(id) not null,
  symbol text not null,
  name text not null,
  supply bigint not null,
  price float not null,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
*/
