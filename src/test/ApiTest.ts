import { verifyOTP } from "../services/Auth";


const otp = '12345'
const key = 'skjhgfds2'


verifyOTP(key, otp).then(res => console.log(res)).catch(err => console.log(err))
