import { ReactNode, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";
import { User } from "../../types/User";



export default function AuthProvider({children}: {children: ReactNode}) {
    const [user, setuser] = useState<User | null>(null)

    function login(user: User) {
        setuser(user)
    }
    function logout() {
        setuser(null)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}