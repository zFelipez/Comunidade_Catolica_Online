 
"use client"; 

import { createClient } from "@supabase/supabase-js";
 
let supabase: ReturnType<typeof createClient> | null = null;

if (typeof window !== "undefined") {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  supabase = createClient(url, anon);
}

export { supabase };
