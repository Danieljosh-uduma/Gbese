import { BankDetails } from "../types/debtTransfer";
import { BASE_URL, headers } from "./Auth";

async function getBankList(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v3/banks/all`, {
            method: 'GET',
            headers: {
                ...headers,
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
    if (bankDetail.statementFile) {
        formData.append('statementFile', bankDetail.statementFile);
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

async function setTransferMethod(token: string | undefined, type: string, debtId: string, userId?: string) {
    let body;
    if (userId) {
        body = {
            transferMethod: type,
            receiverId: userId
        }
    } else {
        body = {
            transferMethod: type
        }
    }
    try {
        // console.log(body, debtId)
        const res = await fetch(`${BASE_URL}/v4/debt/transfer/68278b15309ee48f6f84f6ee`, {
            method: 'PUT',
            headers: {
                ...headers,
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })

        const data = res.json()
        if (!res.ok) {
            if (res.status === 500){
                throw new Error('internal server error')
            } else if (res.status === 400) {
                // console.log(res)
                throw new Error('client error')
            } else if (res.status === 401) {
                return res
            }
            
        }
        return data
    } catch {
        throw new Error("Internet Error")
    }
}


export {
    getBankList,
    uploadDetail,
    setTransferMethod,
}