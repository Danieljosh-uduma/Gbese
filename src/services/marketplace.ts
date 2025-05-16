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
        // const res = await fetch(`${BASE_URL}/v6/notifications`)
        // const res = await fetch(`${BASE_URL}/v6/transactions`)

        // POST 
        // /v4/debt/upload  upload debt detail. statement file
        // /v4/debt/transfer/:debtId
        // "transferMethod": "marketplace"
        // v4/debt/transfer/:debtId
        // body : {transferMethod: 'marketplace'}
        // {transfermethod:specific, receiverId: id}
        // transfermethod: sharedLink 
        // bankCode, debtSource, accountNumber, description, amount, dueDate, interestRate, incentive 

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

async function getProfileStat(token: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v5/user/stat`, {
            method: "GET",
            headers: {
                ...headers,
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
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
        throw new Error("Hello")
    }
}

async function getProfileStatForUser(token: string | undefined, id: string | undefined) {
    try {
        const res = await fetch(`${BASE_URL}/v5/user/stat/${id}`, {
            method: "GET",
            headers: {
                ...headers,
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include',
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
        throw new Error("Hello")
    }
}

export {
    benefactorList,
    getUserDetails,
    getProfileStat,
    getProfileStatForUser,
}