type UserType = {
    phoneNumber: string
    email?: string
}

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