
import { useState, useEffect } from 'react'; 
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import LoginPage from '../pages/Login/LoginPage';
import MobileIntroCarousel from '../pages/signup/mobile/MobileIntroCarousel';


export default function SplashManager() {
  const [loading, setLoading] = useState(true);
  const { innerWidth } = window

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // show splash for 7seconds before loading the next page

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? <SplashScreen />: innerWidth <= 760? <MobileIntroCarousel /> : <LoginPage /> }
    </div>
  );

};