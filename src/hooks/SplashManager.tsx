
import { useState, useEffect } from 'react'; 
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import LoginPage from '../pages/Login/LoginPage';


export default function SplashManager() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // show splash for 7seconds before loading the next page

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? <SplashScreen /> : <LoginPage /> }
    </div>
  );

};