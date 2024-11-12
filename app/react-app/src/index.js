import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/style.scss'

import App from './App';
import Table from './Components/Table/Table';
import Button from './Components/Button/';

import NoPage from './Components/NoPage';
import Dashboard from './Components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="table" element={<Table />} />
        <Route path="table/:page" element={<Table />} />
        <Route path="table/:page/:type" element={<Table />} />
        <Route path="button" element={<Button />} />
        <Route path="button/:page" element={<Button />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

