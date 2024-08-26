import { createClient } from '@supabase/supabase-js'
import { type Database } from '@/src/modules'
/*const url =
  import.meta.env.VITE_SUPABASE_PROJECT_URL ||
  process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL! //TODO: Hacky. Improve this

const anonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY! //TODO: Hacky. Improve this*/

//const supabase = createClient<Database>(url, anonKey)

//TODO: Due to the problems loading VITE vars in expo environment, we need to use the envars object. Improve this temporal solution

const initSupabase = (url: string, anonKey: string) =>
  createClient<Database>(url, anonKey)

export { initSupabase }
/*export const supabase = (url: string, anonKey: string) =>
  createClient<Database>(url, anonKey)*/
