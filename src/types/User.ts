type UserType = {
    phoneNumber: string
    email?: string
}

<<<<<<< HEAD
type ProfileType = {
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    country: string
    user: UserType
}

type AuthContextType = {
    user: UserType | null
    signup: (phoneNumber: string, email?: string) => void
    login: (email: string, password: string) => void
    logout: () => void
}

export type { UserType, AuthContextType, ProfileType }
=======
export type { User }
>>>>>>> a97dc1e4386fa991c0f28383f700ea10abb2ee03
