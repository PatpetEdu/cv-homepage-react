import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Cv from './pages/Cv';
import Contact from './pages/Contact';
import './fonts.css';
import './App.css';

export default function App() {
  const [keySequence, setKeySequence] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      setKeySequence((prevSequence) => prevSequence + key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (keySequence.endsWith('1337')) {
      console.log('Tangentsekvensen "1337" hittad!');
      setShowModal(true); // Visa modalen om tangentsekvensen "1337" skrivs av användaren
    }
  }, [keySequence]);

  const closeModal = () => {
    setShowModal(false); // Stäng modalen
  };

  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu />
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </Router>
  );
}
