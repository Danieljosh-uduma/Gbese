import { BASE_URL, headers } from "./Auth";


async function benefactorList(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v5/benefactor`, {
            method: 'GET',
            headers: {
                ...headers,
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include'
        })
        // const res = await fetch(`${BASE_URL}/v5/user/account`)
        // const res = await fetch(`${BASE_URL}/v6/notifications`)
        // const res = await fetch(`${BASE_URL}/v6/transactions`)

        // POST 
        // /v4/debt/upload 
        // /v4/debt/transfer/:debtId
        // "transferMethod": "marketplace"

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

async function getUserDetails(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v5/user/account`, {
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
export {
    benefactorList,
    getUserDetails,
}