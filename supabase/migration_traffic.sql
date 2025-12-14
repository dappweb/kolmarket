-- Update social_accounts table to include traffic metrics
alter table public.social_accounts 
add column if not exists total_views bigint default 0,
add column if not exists avg_views bigint default 0,
add column if not exists recent_videos_json jsonb default '[]'::jsonb;

-- Example of recent_videos_json structure:
-- [
--   { "title": "Video 1", "views": 10000, "likes": 500, "publishedAt": "2024-01-01" },
--   { "title": "Video 2", "views": 20000, "likes": 1000, "publishedAt": "2024-01-02" }
-- ]
