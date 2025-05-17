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
    if (data.Account_Data.type === 'benefactor') {
        return {
            fullname: data.name,
            token: data.token,
            acctNumber: data.Account_Data.accNumber,
            coins: data.Account_Data.coins,
            balance: data.Account_Data.balance,
            type: data.Account_Data.type,
            _id: data.Account_Data._id,
            amountInvested: data.Account_Data.amountInvested,
            RIO: data.Account_Data.RIO,
            helped: data.Account_Data.helped,
            creditLimit: 0
        }
        } else {
            return {
                fullname: data.name,
                token: data.token,
                acctNumber: data.Account_Data.accNumber,
                coins: data.Account_Data.coins,
                balance: data.Account_Data.balance,
                type: data.Account_Data.type,
                _id: data.Account_Data._id,
                creditLimit: data.Account_Data.creditLimit
            }
        }
}

function getInitials(name: string) {
    const nameArray = name.split(" ");
    const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
    const lastNameInitial = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }

export { 
    validateEmail, 
    getUser, 
    filterDetail, 
    getInitials
}