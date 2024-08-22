import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        if (typeof window !== "undefined") { // Check if window is available (important for SSR)
            const storedUser = localStorage.getItem('chat-user');
            if (storedUser) {
                try {
                    return JSON.parse(storedUser);
                } catch (error) {
                    console.error("Error parsing stored user JSON:", error);
                    return null; // Return null if parsing fails
                }
            }
        }
        return null; // Return null if no stored user or during SSR
    });

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}
