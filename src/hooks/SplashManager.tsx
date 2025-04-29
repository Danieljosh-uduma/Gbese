
import { useState, useEffect } from 'react';
import LoginPage from '../pages/Login/Page'; 
import SplashScreen from '../pages/SplashScreen/SplashScreen';


export default function SplashManager() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // show splash for 5 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? <SplashScreen /> : <LoginPage /> }
    </div>
  );

};