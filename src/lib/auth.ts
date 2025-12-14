import * as ClerkReact from '@clerk/clerk-react';
import * as MockClerk from './clerk-mock';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const isMock = !PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes('dummy') || PUBLISHABLE_KEY.includes('placeholder');

if (isMock) {
  console.log('Using Mock Clerk Provider. Clearing potential Clerk pollution...');
  // Clear Clerk-related items from LocalStorage to prevent conflicts
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.includes('clerk')) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn('Failed to clear local storage:', e);
  }
}

export const ClerkProvider = isMock ? MockClerk.ClerkProvider : ClerkReact.ClerkProvider;
export const SignedIn = isMock ? MockClerk.SignedIn : ClerkReact.SignedIn;
export const SignedOut = isMock ? MockClerk.SignedOut : ClerkReact.SignedOut;
export const SignInButton = isMock ? MockClerk.SignInButton : ClerkReact.SignInButton;
export const UserButton = isMock ? MockClerk.UserButton : ClerkReact.UserButton;
export const useUser = isMock ? MockClerk.useUser : ClerkReact.useUser;
export const useSession = isMock ? MockClerk.useSession : ClerkReact.useSession;
