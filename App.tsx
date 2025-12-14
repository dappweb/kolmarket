import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import { WalletContextProvider } from './components/WalletContextProvider';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ExchangePage = lazy(() => import('./pages/ExchangePage'));
const LaunchpadPage = lazy(() => import('./pages/LaunchpadPage'));
const FoundryPage = lazy(() => import('./pages/FoundryPage'));
const IntelligencePage = lazy(() => import('./pages/IntelligencePage'));
const WhitepaperPage = lazy(() => import('./pages/WhitepaperPage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <WalletContextProvider>
        <Router>
          <ScrollToTop />
          <Toaster 
            position="top-center"
            toastOptions={{
              style: {
                background: '#1a1b23',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
            }}
          />
          <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-yellow-500 selection:text-black flex flex-col">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/exchange" element={<ExchangePage />} />
                  <Route path="/launchpad" element={<LaunchpadPage />} />
                  <Route path="/foundry" element={<FoundryPage />} />
                  <Route path="/intelligence" element={<IntelligencePage />} />
                  <Route path="/whitepaper" element={<WhitepaperPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </WalletContextProvider>
    </HelmetProvider>
  );
};

export default App;