-- Tabla de la lista de espera de Tramato (ya aplicada en el proyecto Supabase conectado).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  platform text not null check (platform in ('iphone', 'android')),
  current_app text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_key unique (email),
  constraint waitlist_email_lowercase check (email = lower(email)),
  constraint waitlist_email_length check (char_length(email) <= 254),
  constraint waitlist_current_app_length check (current_app is null or char_length(current_app) <= 80)
);

-- RLS: la clave pública solo puede insertar. No puede leer, editar ni borrar registros.
alter table public.waitlist enable row level security;

drop policy if exists "waitlist_insert_public" on public.waitlist;
create policy "waitlist_insert_public" on public.waitlist
  for insert to anon, authenticated
  with check (true);

revoke all on public.waitlist from anon, authenticated;
grant insert on public.waitlist to anon, authenticated;

-- Para consultar los registros (desde el SQL Editor de Supabase):
--   select created_at, email, platform, current_app from public.waitlist order by created_at desc;
