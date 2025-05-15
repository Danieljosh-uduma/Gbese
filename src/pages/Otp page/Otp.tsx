import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import '../../index.css';
import './otp.css';

const Otp = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
  const [timer, setTimer] = useState<number>(120); // countdown in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
  inputRefs.current[0]?.focus();
}, []);
const [error, setError] = useState<string | null>(null);


  // Countdown timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/\D/, '');
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(null); // Clear error on change

    if (index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').slice(0, 5).split('');
    const newOtp = [...otp];

    pasted.forEach((char, i) => {
      if (i < 5 && /\d/.test(char)) {
        newOtp[i] = char;
        const input = inputRefs.current[i];
        if (input) input.value = char;
      }
    });

    setOtp(newOtp);
    inputRefs.current[pasted.length - 1]?.focus();
  };

  const handleSubmit = () => {
    const code = otp.join('');
  if (code !== '12345') {
    setError('Invalid OTP. Please try again.');
  } else {
    setError(null);
    console.log('OTP verified!');
    // Proceed to next step or navigate
  }
    // const code = otp.join('');
    // console.log('Entered OTP:', code);
    // Add API verification logic here
  };

  const handleResend = () => {
    if (timer === 0) {
      // Call resend API here
      console.log('Resending OTP...');
      setOtp(new Array(5).fill(''));
      setTimer(120);
      inputRefs.current[0]?.focus();
    }
  };

  // Format timer into MM:SS
  const formatTime = (sec: number): string => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(1, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="otp-container">
      <div className="otp-logo">
        <img src="src/assets/images/icons/logo-main.svg" alt="Logo" />
      </div>

      <div className="otp-heading">
        <h1>Verify your Number</h1>
        <p>We have sent a 5-digit code to your phone number</p>
      </div>

      <div className="otp-area" onPaste={handlePaste}>
        {otp.map((value, index) => (
          <input className='otp-input'
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target, index)
            }
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      {error && (
  <p className="otp-error">
    {error}
  </p>
)}


      <p className="otp-countdown">
        Code Expires in <span>{formatTime(timer)}</span>
      </p>

      <div className="otp-btn-div">
        <button className="otp-verify" onClick={handleSubmit}>
          Verify
        </button>
      </div>

      <p
        className="otp-resend"
        style={{ cursor: timer === 0 ? 'pointer' : 'not-allowed', opacity: timer === 0 ? 1 : 0.5 }}
        onClick={handleResend}
      >
        Resend the code
      </p>
    </div>
  );
};

export default Otp;
