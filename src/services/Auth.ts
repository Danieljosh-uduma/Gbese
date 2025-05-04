import { ProfileType } from "../types/User"

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
    if (res.status === 500) {
        throw new Error('Unable to fetch OTP, please try again')
    }
    if (!res.ok) {
        throw new Error('Invalid phone number, failed to send OTP')
    }
    const data = await res.json()
    return data
}

async function verifyOTP(key: string, otp: string) {
    const res = await fetch(`${BASE_URL}/v1/phone/verify`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"key": key, "otp": otp}),
    })

    if (res.status === 500) {
        throw new Error('Unable to verify OTP, please try again')
    }
    if (!res.ok) {
        throw new Error('Invalid OTP')
    }
    const data = await res.json()
    return data
}

async function createUser(detail: {key: string} & ProfileType ) {
    const res = await fetch(`${BASE_URL}/v2/User`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(detail)
    })
    if (res.status === 500) {
        throw new Error("unable to create user")
    }
    if (!res.ok) {
        throw new Error("Invalid details, try again")
    }
    const data = res.json()
    return data
}

async function loginUser(email: string, password: string) {
    const res = await fetch(`${BASE_URL}/v2/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"email": email, "password": password}),
    })
    
    if (res.status === 500) {
        throw new Error('Login failed, please try again')
    }
    if (!res.ok) {
        return { success: false, message: 'Login failed, invalid credentials' }
    }
    const data = await res.json()
    return data
}

function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// https://gbese.onrender.com/api/v2/user
// https://gbese.onrender.com/api/v2/signup

export { 
    getOTP,
    verifyOTP,
    createUser,
    loginUser,
    validateEmail
}