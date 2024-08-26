class SupabaseConfig {
  private url = ''
  private anonKey = ''

  setSupabaseConfig = (url: string, anonKey: string) => {
    this.url = url
    this.anonKey = anonKey
  }

  getSupabaseConfig = () => {
    //TODO: Validate that the url and anonKey are not empty
    return { url: this.url, anonKey: this.anonKey }
  }
}

const supabaseConfig = new SupabaseConfig()
export { supabaseConfig }
