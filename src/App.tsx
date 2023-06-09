import React, { useState } from 'react';
import './App.css';
import TopBanner from './Home';
import MovieList from './Movies';
import Layout from './Layout';
import Podcast from './Podcast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopBanner />} />
          <Route path="Home" element={<TopBanner />} />
          <Route path="Movies" element={<MovieList />} />
          <Route path="Podcast" element={<Podcast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
