import { ReactNode, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";
import { userType } from "../../types/User";
import { getUser } from "../../services/utils";



export default function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<userType | null>(getUser())

    
    function login(detail: userType) {
        localStorage.setItem('userDetails', JSON.stringify(detail))
        setUser(detail)
    }

    function logout() {
        localStorage.clear()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}