import { loginType, userType } from "../types/User";

function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function getUser(): userType | null{
    const user = localStorage.getItem("userDetails")
    if (!user) {
        return null
    }
    return JSON.parse(user)
}

function filterDetail(data: loginType ): userType {
    return {
        fullname: data.name,
        acctNumber: data.Account_Data.accNumber,
        coins: data.Account_Data.coins,
        balance: data.Account_Data.balance,
        type: data.Account_Data.type,
        _id: data.Account_Data._id,
        amountInvested: data.Account_Data.amountInvested,
        RIO: data.Account_Data.RIO,
        helped: data.Account_Data.helped
    }
}

export { validateEmail, getUser, filterDetail }