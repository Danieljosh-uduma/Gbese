import { Dispatch, SetStateAction } from "react"

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
    creditLimit: number
}

type beneficiaryUser = {
    fullname: string
    token: string
    acctNumber: string
    coins: number
    balance: number
    type: 'beneficiary'
    _id: string
    creditLimit: number
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
        type: "benefactor"
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
        accNumber: string
        balance: number
        coins: number
        createdAt: string
        creditLimit: number
        type: "beneficiary"
        updatedAt: string
        _id: string
    }
}

type userType =  beneficiaryUser | benefactorUser
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
    showSidebar: boolean
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

export type { 
    userType, 
    loginType, 
    AuthContextType, 
    ProfileType,
    useHook,
    benefactorType,
    beneficiaryType,
}
