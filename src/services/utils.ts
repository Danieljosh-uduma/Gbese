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
        acctNumber: data.Account_Date.accNumber,
        coins: data.Account_Date.coins,
        balance: data.Account_Date.balance,
        type: data.Account_Date.type,
        _id: data.Account_Date._id,
        amountInvested: data.Account_Date.amountInvested,
        RIO: data.Account_Date.RIO,
        helped: data.Account_Date.helped
    }
}

export { validateEmail, getUser, filterDetail }