import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

// Import social media icons
import facebookIcon from './assets/facebook_5968764.png';
import instagramIcon from './assets/instagram_4138124.png';
import linkedinIcon from './assets/linkedin_254394.png';
import telegramIcon from './assets/telegram_2111646.png';
import translateIcon from './assets/translation.jpg';
import dictionaryIcon from './assets/saving.jpg';
import trainIcon from './assets/adding.jpg';

// Using online placeholder images
const screenshots = {
  usage: 'https://placehold.co/400x300/6200ee/white/png?text=Easy+to+Use&font=roboto',
  accuracy: 'https://placehold.co/400x300/6200ee/white/png?text=High+Accuracy&font=roboto',
  offline: 'https://placehold.co/400x300/6200ee/white/png?text=Works+Offline&font=roboto',
  data: 'https://placehold.co/400x300/6200ee/white/png?text=Contribute+Data&font=roboto',
};

// Footer component
const Footer = () => (
  <footer className="footer">
    <p>All rights reserved © 2024 Myanmar-English Translator  Developed by Khant Min Lwin</p>
  </footer>
);

const Home = () => (
  <div className="container">
    <div className="hero">
      <h1>Myanmar-English Translator</h1>
      <p>Translate between Myanmar and English languages offline!</p>
      <div className="download-buttons">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"  className="download-btn disabled">
          Download on Play Store
        </a>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" disabled className="download-btn disabled">
          Download on App Store
        </a>
        <a href="https://mega.nz/file/DQIUUDpD#IiGbM1BCC9oFo0E9oQ3SVh7Kyjg_O2hdvpXEgLK2HJ0" target="_blank" rel="noopener noreferrer" className="download-btn">
          Download on Mega
        </a>
      </div>
    </div>
    
    <div className="features">
      <div className="feature-card">
        <img src={translateIcon} alt="How to use the app" width="50" height="50" />
        <h3>Easy to Use</h3>
        <p>Simple interface for quick translations between Myanmar and English</p>
      </div>
      
      <div className="feature-card">
        <img src={translateIcon} alt="Translation accuracy" />
        <h3>High Accuracy</h3>
        <p>Powered by a custom-trained neural machine translation model</p>
      </div>
      
      <div className="feature-card">
        <img src={dictionaryIcon} alt="Offline capability" />
        <h3>Works Offline</h3>
        <p>No internet needed - translate anywhere, anytime</p>
      </div>
      
      <div className="feature-card">
        <img src={trainIcon} alt="Data contribution" />
        <h3>Contribute Data</h3>
        <p>Help improve translations by contributing your own data</p>
      </div>
    </div>
  </div>
);

const Datasets = () => (
  <div className="container">
    <h2>Training Datasets</h2>
    <div className="dataset-list">
      <div className="dataset-card">
        <h3>Hugging Face Dataset</h3>
        <p>Primary dataset used for training the translation model</p>
        <a 
          href="https://huggingface.co/datasets/kaung-nyo-lwin/english-myanmar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="dataset-link"
        >
          View Dataset
        </a>
      </div>

      <div className="dataset-card">
        <h3>ALT Parallel Corpus</h3>
        <p>Asian Language Treebank English-Myanmar parallel corpus</p>
        <a 
          href="https://www2.nict.go.jp/astrec-att/member/mutiyama/ALT/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="dataset-link"
        >
          View Dataset
        </a>
      </div>

      <div className="dataset-card">
        <h3>UCSY-SC Corpus</h3>
        <p>University of Computer Studies, Yangon parallel corpus</p>
        <a 
          href="#ucsy" 
          className="dataset-link"
        >
          View Dataset
        </a>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="container">
    <div className="about-content">
      <h2>About Our App</h2>
      <p>
        Our Myanmar-English Translator app is designed to work completely offline, 
        using a custom-trained neural machine translation model. The app provides 
        fast and accurate translations between Myanmar and English languages.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Offline translation capability</li>
        <li>Custom-trained neural translation model</li>
        <li>User-friendly interface</li>
        <li>Save and manage your translations</li>
        <li>Contribute to model improvement</li>
      </ul>

      <div className="social-links">
        <a href="https://www.facebook.com/mgsansu" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="nav-brand">MM Later</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/datasets" className="nav-link">Datasets</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App; 