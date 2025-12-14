import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ExchangePage from './pages/ExchangePage';
import LaunchpadPage from './pages/LaunchpadPage';
import FoundryPage from './pages/FoundryPage';
import IntelligencePage from './pages/IntelligencePage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-yellow-500 selection:text-black flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/launchpad" element={<LaunchpadPage />} />
            <Route path="/foundry" element={<FoundryPage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;