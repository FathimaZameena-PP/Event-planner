import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './index.css'
import App from './App.jsx'
import client from "./react-query-client";

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
  <StrictMode>
    <App />
  </StrictMode>
  </QueryClientProvider>
)
