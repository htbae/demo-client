import App from './App.tsx';
import './font.css';
import './index.css';
import './styles/components/date-picker-style.scss';
import './styles/custom.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
