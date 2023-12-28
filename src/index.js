import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

<React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>
</React.StrictMode>
