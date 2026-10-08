-- Run this in the new Supabase project: Dashboard -> SQL Editor -> New query -> Run
create table if not exists public.students (
  id             bigint generated always as identity primary key,
  student_number text not null unique,
  student_name   text not null,
  password       text not null,
  section_number text,
  progress       jsonb not null default '{}'::jsonb,
  total_score    numeric not null default 0,
  overall_grade  text not null default 'N/A',
  registered_at  timestamptz not null default now()
);

-- The app talks to the table directly with the anon key, so allow anon access.
alter table public.students enable row level security;

drop policy if exists "anon full access" on public.students;
create policy "anon full access" on public.students
  for all to anon, authenticated
  using (true) with check (true);
