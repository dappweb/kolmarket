import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from './src/lib/auth';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './i18n'; // Import i18n config
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_dummy';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const SafeApp = () => {
  return (
    <ErrorBoundary>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </ErrorBoundary>
  );
};

root.render(
  <SafeApp />
);