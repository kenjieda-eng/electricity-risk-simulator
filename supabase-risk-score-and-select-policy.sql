-- simulation_results に risk score 系カラムを追加
alter table public.simulation_results
  add column if not exists risk_score integer;

alter table public.simulation_results
  add column if not exists risk_label text;

alter table public.simulation_results
  add column if not exists seasonal_variation_score integer;

alter table public.simulation_results
  add column if not exists peak_score integer;

alter table public.simulation_results
  add column if not exists usage_pattern_score integer;

alter table public.simulation_results
  add column if not exists unit_cost_score integer;

-- RLS が有効で、匿名ユーザーの SELECT が無い場合に compare 用取得を許可
-- 注意: anon に読み取りを開放するため、公開用途の前提で使ってください
alter table public.simulation_results enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'simulation_results'
      and policyname = 'Allow anon select simulation results'
  ) then
    create policy "Allow anon select simulation results"
      on public.simulation_results
      for select
      to anon
      using (true);
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'simulation_results'
      and policyname = 'Allow authenticated select simulation results'
  ) then
    create policy "Allow authenticated select simulation results"
      on public.simulation_results
      for select
      to authenticated
      using (true);
  end if;
end
$$;

-- 既存 INSERT policy がある想定だが、未作成の場合のみ追加
do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'simulation_results'
      and policyname = 'Allow anon insert simulation results'
  ) then
    create policy "Allow anon insert simulation results"
      on public.simulation_results
      for insert
      to anon
      with check (true);
  end if;
end
$$;
