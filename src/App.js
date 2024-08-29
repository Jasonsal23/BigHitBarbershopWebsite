import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Locations from './components/Locations.js';
import About from './components/About.js'; // Import About
import Gallery from './components/Gallery.js'; // Import Gallery
import Footer from './components/footer.js';
import LasVegas from './components/LasVegas.js';
import Kenosha from './components/Kenosha.js';
import BackToTopButton from './components/BackToTopButton';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lasvegas" element={<LasVegas />} />
          <Route path="/kenosha" element={<Kenosha />} />
        </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
