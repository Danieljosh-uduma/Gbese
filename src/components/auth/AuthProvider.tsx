// import { ReactNode, useState } from "react";
// import { AuthContext } from "../../hooks/useAuth";
// import { AuthContextType } from "../../types/User";
// import { UserType, ProfileType } from "../../types/User";



// export default function AuthProvider({children}: {children: ReactNode}) {
//     const [user, setUser] = useState< AuthContextType | null>(null)
//     const [profile, setProfile] = useState<ProfileType | null>(null)

//     function signup(phoneNumber: string, email?: string) {
//         return
//     }
//     function login(email: string, password: string) {
//         return
//     }

//     function logout() {
//         return
//     }

//     // login function to set the user state

//     // logout function to clear the user state

//     return (
//         <AuthContext.Provider value={{}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }