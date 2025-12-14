-- Enable Row Level Security
alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;

-- 1. Users Table
create table if not exists public.users (
  id text primary key, -- Clerk User ID
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.users enable row level security;

create policy "Users can view their own profile" on public.users
  for select using (auth.uid()::text = id);

create policy "Users can update their own profile" on public.users
  for update using (auth.uid()::text = id);

-- 2. Social Accounts Table
create table if not exists public.social_accounts (
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
alter table public.social_accounts enable row level security;

-- Allow users to view their own social accounts
-- Note: In a real Clerk+Supabase setup, auth.uid() might need custom JWT mapping. 
-- For this demo, we might need to relax RLS or ensure the client sends the correct headers.
-- Here we assume the client might not be sending a Supabase-compatible JWT yet, 
-- so we might need to allow public insert/select for the MVP if auth isn't fully bridged.
-- HOWEVER, for security best practices, we will define policies assuming a future auth bridge.
-- For NOW (Development Mode), we will allow public access but ideally you should use Clerk JWT templates.

-- DEV MODE POLICY (Allow all for demo purposes, replace with strict policies in production)
create policy "Enable read access for all users" on public.social_accounts for select using (true);
create policy "Enable insert access for all users" on public.social_accounts for insert with check (true);
create policy "Enable update access for all users" on public.social_accounts for update using (true);

-- 3. Valuations Table
create table if not exists public.valuations (
  id uuid default gen_random_uuid() primary key,
  user_id text references public.users(id) not null,
  total_followers int,
  avg_engagement float,
  market_cap float,
  score float,
  report_json jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.valuations enable row level security;

-- DEV MODE POLICY
create policy "Enable read access for all users" on public.valuations for select using (true);
create policy "Enable insert access for all users" on public.valuations for insert with check (true);

-- 4. Tokens Table
create table if not exists public.tokens (
  mint_address text primary key,
  user_id text references public.users(id) not null,
  symbol text not null,
  name text not null,
  supply bigint not null,
  price float not null,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.tokens enable row level security;

-- DEV MODE POLICY
create policy "Enable read access for all users" on public.tokens for select using (true);
create policy "Enable insert access for all users" on public.tokens for insert with check (true);

-- 5. Helper Functions (Optional)
-- Function to automatically update user profile if needed
