import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}


type AuthContextType = {
    isLoggedIn: boolean;
    LogIn: () => void;
    LogOut: () => void;
    user: User | null;
    setUser: (u: User | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {

    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("El useAuth debe utilizarse dentro del contexto");
    } else {
        return ctx;
    }
}


// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        () => localStorage.getItem("logged_user") === "true"
    );

    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        localStorage.setItem("logged_user", String(isLoggedIn));
    }, [isLoggedIn]);

    const LogIn = () => setIsLoggedIn(true);
    const LogOut = () => setIsLoggedIn(false);


    return (
        <AuthContext.Provider value={{ isLoggedIn, LogIn, LogOut, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}