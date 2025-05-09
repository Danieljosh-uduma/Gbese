import { BASE_URL } from "./Auth";



async function benefactorList() {
    try {
        // const res = await fetch(`${BASE_URL}/v5/benefactor`)
        // const res = await fetch(`${BASE_URL}/v5/user/account`)
        // const res = await fetch(`${BASE_URL}/v6/notifications`)
        const res = await fetch(`${BASE_URL}/v6/transactions`)
        console.log(`${BASE_URL}/v5/benefactor`)

        if (!res.ok) {
            if (res.status === 500){
                console.log('internal server error')
            } else if (res.status === 400) {
                console.log('client erro')
            }
        }
        const data = res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export {
    benefactorList,
}