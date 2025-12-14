import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './i18n'; // Import i18n config
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.error("Missing Clerk Publishable Key in .env.local");
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const SafeApp = () => {
  if (!PUBLISHABLE_KEY) {
    return (
      <div style={{ padding: 20, color: 'red', fontFamily: 'sans-serif' }}>
        <h1>Configuration Error</h1>
        <p>Missing <code>VITE_CLERK_PUBLISHABLE_KEY</code> environment variable.</p>
        <p>Please check your <code>.env.local</code> file.</p>
      </div>
    );
  }
  
  return (
    <ErrorBoundary>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </ErrorBoundary>
  );
};

root.render(
  <React.StrictMode>
    <SafeApp />
  </React.StrictMode>
);