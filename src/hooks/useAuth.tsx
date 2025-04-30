import { createContext, useContext } from "react";
import { AuthContextType } from "../types/User";

const AuthContext = createContext<AuthContextType | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const hook = useContext(AuthContext)
    if (!hook) {
        console.error('useAuth must be use inside the AuthProvider')
    }
    return hook
}

export { AuthContext }

