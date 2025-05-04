type UserType = {
    phoneNumber: string
    email?: string
}

type ProfileType = {
    fullName: string
    email: string
    password: string
    dateOfBirth: string
    gender: string
}

type AuthContextType = {
    user: UserType | null
    signup: (phoneNumber: string, email?: string) => void
    login: (email: string, password: string) => void
    logout: () => void
}

export type { UserType, AuthContextType, ProfileType }
