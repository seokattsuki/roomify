interface AuthState {
    isSignedIn: boolean;
    username: string | null,
    userId: string | null,
}

type AuthContextType ={
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuthState: () => Promise<boolean>;
    signIn: () => Promise<void>;
    signOut: () => Promise<boolean>; 
}