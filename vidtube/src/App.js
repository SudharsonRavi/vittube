import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ChannelDetails, VideoDetails, SearchFeed, Navbar, Feed } from './components';

export default function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>

        {/* Closing Box properly */}
        <Box />
      </Box>
    </Router>
  );
}
