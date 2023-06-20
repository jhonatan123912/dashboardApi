import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopRated from './pages/TopRated';
import Popular from './pages/Popular';
import NP from './pages/NP';
import Upcoming from './pages/Upcoming';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/np" element={<NP />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
