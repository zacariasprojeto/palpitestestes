// Configuração do Supabase
const SUPABASE_URL = 'https://slvhmpgotgbstbsjrqzx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsdmhtcGdvdGdic3Ric2pycXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4Mjk2MjMsImV4cCI6MjA3OTQwNTYyM30.v0hkCv6oeXMaUV_pv7_3SuD4Z9txWGsTbx-6ew1xpX0';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
