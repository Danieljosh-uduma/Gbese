type benefactorUser = {
    fullname: string
    token: string
    acctNumber: string
    coins: number
    balance: number
    type: 'benefactor'
    _id: string
    amountInvested: number
    RIO: number
    helped: number
}

type beneficiaryUser = {
    fullname: string
    token: string
    acctNumber: string
    coins: number
    balance: number
    type: 'benefactor'
    _id: string
    amountInvested: number
    RIO: number
    helped: number
}

type benefactorType = {
    success: boolean
    message: string
    token: string
    name: string
    Account_Data: {
        RIO: number
        accNumber: string
        amountInvested: number
        balance: number
        coins: number
        createdAt: string
        helped: number
        type: "benefactor" | "benefactor"
        updatedAt: string
        _id: string
    }
}

type beneficiaryType = {
    success: boolean
    message: string
    token: string
    name: string
    Account_Data: {
        RIO: number
        accNumber: string
        amountInvested: number
        balance: number
        coins: number
        createdAt: string
        helped: number
        type: "benefactor" | "benefactor"
        updatedAt: string
        _id: string
    }
}

type userType = benefactorUser | beneficiaryUser
type loginType = benefactorType | beneficiaryType

type ProfileType = {
    fullName: string
    email: string
    password: string
    dateOfBirth: string
    gender: string
}

type AuthContextType = {
    user: userType | null
    login: (details: userType) => void
    logout: () => void
}

type useHook = {
    userType: 'beneficiary' | 'benefactor' | null
    BASE_URL: string
}

export type { 
    userType, 
    loginType, 
    AuthContextType, 
    ProfileType,
    useHook 
}
