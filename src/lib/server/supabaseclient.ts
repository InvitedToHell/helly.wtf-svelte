import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const supabase: SupabaseClient = createClient("https://pgimfipisiucqirochjf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaW1maXBpc2l1Y3Fpcm9jaGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyODg1NTEsImV4cCI6MTk5Mzg2NDU1MX0.scC4e2ZPSHUH5zmizojc4X2ZhCMsds-UIFfMkBAUWwY");