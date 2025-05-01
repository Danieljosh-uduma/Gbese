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

async function loginUser(email: string, password: string) {
    const res = await fetch(`${BASE_URL}/v2/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"email": email, "password": password}),
    })
    
    if (!res.ok) {
        console.log("Error occurred", res.status)
        return { success: false, message: 'Login failed, invalid credentials' }
    }
    const data = await res.json()
    return data
}

function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}


export { 
    getOTP,
    loginUser,
    validateEmail
}