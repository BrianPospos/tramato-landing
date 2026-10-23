-- Tabla de la lista de espera de Tramato.
-- Ejecutala una vez en Supabase › SQL Editor.

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

-- Sin políticas: la API pública (anon/authenticated) no puede leer ni escribir.
-- Solo la service role key, usada desde el servidor de la landing, accede a la tabla.
alter table public.waitlist enable row level security;
revoke all on public.waitlist from anon, authenticated;

-- Para consultar los registros:
--   select created_at, email, platform, current_app from public.waitlist order by created_at desc;
