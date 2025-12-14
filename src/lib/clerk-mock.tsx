import React, { createContext, useContext, useState, ReactNode } from 'react';

// Mock User Context
interface UserContextType {
  isSignedIn: boolean;
  user: any;
  isLoaded: boolean;
  signIn?: () => void;
  signOut?: () => void;
}

const UserContext = createContext<UserContextType>({
  isSignedIn: false,
  user: null,
  isLoaded: true
});

export const useUser = () => useContext(UserContext);

interface ClerkProviderProps {
  children: ReactNode;
  publishableKey?: string;
  afterSignOutUrl?: string;
}

export const ClerkProvider = ({ children }: ClerkProviderProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  const signIn = () => {
    setIsSignedIn(true);
    setUser({
      id: 'mock-user-id',
      fullName: 'Demo User',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
    });
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUser(null);
  };

  const value = {
    isSignedIn,
    user,
    isLoaded: true,
    signIn,
    signOut
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const SignedIn = ({ children }: { children: ReactNode }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? <>{children}</> : null;
};

export const SignedOut = ({ children }: { children: ReactNode }) => {
  const { isSignedIn } = useUser();
  return !isSignedIn ? <>{children}</> : null;
};

export const SignInButton = ({ children, mode }: any) => {
  const { signIn } = useUser();
  return (
    <div onClick={signIn} style={{ cursor: 'pointer', display: 'inline-block' }}>
      {children || <button className="px-4 py-2 bg-blue-600 rounded text-white">Sign In</button>}
    </div>
  );
};

export const UserButton = () => {
  const { user, signOut } = useUser();
  if (!user) return null;
  
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={signOut} title="Click to Sign Out">
      <img src={user.imageUrl} alt="Profile" className="w-8 h-8 rounded-full bg-gray-200 border border-white/20" />
    </div>
  );
};
