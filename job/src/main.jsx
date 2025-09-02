import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material'; // Import ThemeProvider and CssBaseline
import theme from './theme'; // Import your custom theme
import './index.css'; // Global styles (if any)
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap your App with ThemeProvider */}
      <CssBaseline /> {/* Optional: Resets styles for consistency */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
