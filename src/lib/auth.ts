import * as ClerkReact from '@clerk/clerk-react';
import * as MockClerk from './clerk-mock';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const isMock = !PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes('dummy') || PUBLISHABLE_KEY.includes('placeholder');

if (isMock) {
  console.log('Using Mock Clerk Provider because VITE_CLERK_PUBLISHABLE_KEY is missing or invalid.');
}

export const ClerkProvider = isMock ? MockClerk.ClerkProvider : ClerkReact.ClerkProvider;
export const SignedIn = isMock ? MockClerk.SignedIn : ClerkReact.SignedIn;
export const SignedOut = isMock ? MockClerk.SignedOut : ClerkReact.SignedOut;
export const SignInButton = isMock ? MockClerk.SignInButton : ClerkReact.SignInButton;
export const UserButton = isMock ? MockClerk.UserButton : ClerkReact.UserButton;
export const useUser = isMock ? MockClerk.useUser : ClerkReact.useUser;
