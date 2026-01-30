import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';
import LasVegas from './components/LasVegas.js';
import Kenosha from './components/Kenosha.js';
import BackToTopButton from './components/BackToTopButton';
import ErrorBoundary from './components/ErrorBoundary';
import Accessibility from './components/Accessibility';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash (let hash navigation handle its own scrolling)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/lasvegas" element={<LasVegas />} />
            <Route path="/kenosha" element={<Kenosha />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
      </ErrorBoundary>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
