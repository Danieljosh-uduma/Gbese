
// const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = "https://gbese.onrender.com/api"
const headers = new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
})


async function getOTP(phoneNumber: string) {
    const res = await fetch(`${BASE_URL}/v1/phone/register`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"phone": phoneNumber}),
    })
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch OTP')
    }
    return data
}


export { getOTP }