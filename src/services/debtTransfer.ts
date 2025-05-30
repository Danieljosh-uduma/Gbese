import { BankDetails } from "../types/debtTransfer";
import { BASE_URL } from "./Auth";

async function getBankList(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v3/banks/all`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include'
        })

        const data = await res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
        }
        return data
    } catch {
        throw new Error("hello")
    }
}

async function uploadDetail(token: string | undefined, bankDetail: BankDetails) {

    const formData = new FormData()
    formData.append('bankCode', bankDetail.bankCode)
    formData.append('debtSource', bankDetail.debtSource) // Make sure this matches your backend's expected field
    formData.append('amount', String(bankDetail.amount))
    formData.append('accountNumber', bankDetail.accountNumber)
    formData.append('dueDate', bankDetail.dueDate)
    formData.append('interestRate', String(bankDetail.interestRate))
    formData.append('incentives', bankDetail.incentives)
    formData.append('description', bankDetail.description)
    formData.append('transferMethod', bankDetail.method)
    formData.append('statementFile', bankDetail.statementFile);
    if (bankDetail.method === 'specific') {
        formData.append('receiverId', bankDetail.selectedUser)
    } 


    try {
        // /v4/debt/upload  upload debt detail. statement file
        const res = await fetch(`${BASE_URL}/v4/debt/upload`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
            body: formData
        })

        const data = res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                console.log(res)
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
        }
        return data
    } catch {
        throw new Error("hello")
    }
}

async function fundAccount(token: string | undefined, amount: string) {
    try {
        const res = await fetch(`${BASE_URL}/v6/fund/account`, {
            method: 'PATCH',
            headers: {
                // ...headers,
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify({amount: amount,})
        })

        const data = await res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
        }
        return data
    } catch {
        throw new Error("hello")
    }
}

async function getTransactionHistory(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v6/transactions`, {
            method: 'GET',
            headers: {
                // ...headers,
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
        })

        const data = await res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
        }
        return data
    } catch {
        throw new Error("hello")
    }
}

async function sendMoneyInternal(token: string | undefined, accNumber: string, amount: string) {
    try {
        const res = await fetch(`${BASE_URL}/v6/send/internal`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify({accNumber: accNumber, amount: amount, note: 'note'})
        })

        const data = await res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                console.log(res)
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
        }
        return data
    } catch {
        throw new Error("hello")
    }
}




export {
    getBankList,
    uploadDetail,
    fundAccount,
    getTransactionHistory,
    sendMoneyInternal,
}