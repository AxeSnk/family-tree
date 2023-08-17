import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '../components';

import './index.scss';

const App: React.FC = () => (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <React.Suspense fallback={<p>Загрузка ...</p>}>
          <Router />
        </React.Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
