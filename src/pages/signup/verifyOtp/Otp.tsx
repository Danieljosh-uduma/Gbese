import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import { verifyOTP } from '../../../services/Api';
import Button from '../../../components/common/button/Button';
import './otp.css';
import { Logo } from '../../../components/icons/Icon';

const Otp = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
  const [timer, setTimer] = useState<number>(10); // countdown in seconds
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const key = useLocation().state.key;
  const navigate = useNavigate();


  useEffect(() => {
  inputRefs.current[0]?.focus();
  }, []);


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
    setError(''); // Clear error on change

    if (index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number) {
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
    setIsLoading(true);
    setError('');
    
    verifyOTP(key, code)
      .then(res => {
        setIsLoading(false)

        if (res.success) {
          navigate('/', { state: { key: res.key}})
        } else {
          setError(res.message);
          console.log('OTP verification failed:', res.message);
        }
      })
      .catch(err => {
        setIsLoading(false)
        setError('Invalid OTP. Please try again.');
        console.log(err.message)
      })
  };

  const handleResend = () => {
    if (timer === 0) {
      // Call resend API here
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
        <Logo />
      </div>

      <div className="otp-heading">
        <h1>Verify your Number</h1>
        <p>We have sent a 5-digit code to your phone number</p>
      </div>

      <div className="otp-area" onPaste={handlePaste}>
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value}
            title='Enter the OTP code'
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
      </p> )}


      <p className="otp-countdown">
        Code Expires in <span className='span'>{formatTime(timer)}</span>
      </p>

      <div className="otp-btn-div">
        <Button className="otp-verify" onClick={handleSubmit} isLoading={isLoading} disabled={isLoading}>
          Verify
        </Button>
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
