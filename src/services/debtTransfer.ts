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

async function uploadDetail(token: string | undefined, bankDetail: BankDetails) {
    try {
        // /v4/debt/upload  upload debt detail. statement file
        const res = await fetch(`${BASE_URL}/v4/debt/upload`, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify(bankDetail)
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

export {
    getBankList,
    uploadDetail,
}