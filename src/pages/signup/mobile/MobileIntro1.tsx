import { useNavigate } from 'react-router-dom';
import {  ArrowRightIcon, QAIcon,} from '../../../components/icons/Icon'
import './MobileIntro.css'
import Button from '../../../components/common/button/Button';
function MobileIntro1() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <button className="skip-btn" onClick={() => navigate('/signup')}>
      <span>Skip</span> <ArrowRightIcon/>

      </button>

       <QAIcon className="illustration" width={300} />
       <div className="illustration-text">
      <h2>Streamline Your Debt, Transfers Effortlessly and Effectively.</h2>
      <p>
        Easily manage debt payments, transfers, and more with Gbese.
        Enjoy a seamless experience that puts convenience at your fingertips.
      </p>
      </div>
      <div className="dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <Button url="mobileintro2">Next</Button>
</div>
);
}
export default MobileIntro1;
