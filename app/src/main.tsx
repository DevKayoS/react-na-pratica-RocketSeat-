import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const queryCLient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
