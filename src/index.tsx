import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
