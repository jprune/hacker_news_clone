import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { App, New, Ask, Comments, Jobs, Past, Show, Submit } from './Pages/index';
import Header from './components/Header/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/new" element={<New />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/past" element={<Past />} />
            <Route path="/show" element={<Show />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
);
