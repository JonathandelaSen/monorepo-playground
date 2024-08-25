import { createClient } from '@supabase/supabase-js'
import { type Database } from './types/database.types'

const url =
  import.meta.env.VITE_SUPABASE_PROJECT_URL ||
  process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL! //TODO: Hacky. Improve this
const anonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY! //TODO: Hacky. Improve this

const supabase = createClient<Database>(url, anonKey)

export default supabase
