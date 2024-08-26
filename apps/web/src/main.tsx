import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store, supabaseConfig } from 'my-shared'

supabaseConfig.setSupabaseConfig(
  import.meta.env.VITE_SUPABASE_PROJECT_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!,
)
createRoot(document.getElementById('root') as HTMLFormElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
