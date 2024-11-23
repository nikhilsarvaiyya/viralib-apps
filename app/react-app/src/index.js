import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/style.scss'

import '../node_modules/justyle/dist/justyle.css';
import App from './App';
import Button from './Components/Button/';

import NoPage from './Components/NoPage';
import Dashboard from './Components/Dashboard';
import Avatar from './Components/Avatar';
import Input from './Components/Input';
import Table from './Components/Table';

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
        <Route path="button/:page/:type" element={<Button />} />
        <Route path="avatar" element={<Avatar />} />
        <Route path="avatar/:page" element={<Avatar />} />
        <Route path="avatar/:page/:type" element={<Avatar />} />
        <Route path="input" element={<Input />} />
        <Route path="input/:page" element={<Input />} />
        <Route path="input/:page/:type" element={<Input />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

