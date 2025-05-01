// src/components/Icon.tsx
import mainLogo from '../../assets/images/icons/logo-main.svg'
import whiteLogo from '../../assets/images/icons/Logo-white.svg'
import arrowLeft from '../../assets/images/icons/arrow-left.svg'
import arrowRight from '../../assets/images/icons/arrow-right.svg'
import interestImg from '../../assets/images/icons/Intrest-on-loan.svg'
import loanImg1 from '../../assets/images/icons/loanImg.svg'
import logoText from '../../assets/images/icons/Logo-text.png'
import qAndAImage from '../../assets/images/icons/Q and A about loan.svg'
import frame1 from '../../assets/images/Frame-1.png'
import Calendar from '../../assets/images/icons/Calendar.svg'
// --- types ---
type LogoProps = {
  type?: 'white' | 'green'
  className?: string
}

type ImageProps = {
  className?: string
  width?: number | string
  height?: number | string
}

// --- components ---
function Logo(props: LogoProps) {
  const { type, className } = props

  if (type === 'white') {
    return <img src={whiteLogo} alt="Logo" className={className} />
  } else if (type === 'green') {
    return <img src={mainLogo} alt="Green Logo" className={className} />
  } else {
    return <img src={mainLogo} alt="Logo" className={className} />
  }
}

function ArrowLeftIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={arrowLeft} alt="Arrow Left" className={className} style={{ width, height }} />
}

function ArrowRightIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={arrowRight} alt="Arrow Right" className={className} style={{ width, height }} />
}

function InterestIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={interestImg} alt="Interest on Loan" className={className} style={{ width, height }} />
}

function LoanImageOne(props: ImageProps) {
  const { className, width, height } = props
  return <img src={loanImg1} alt="Loan Image" className={className} style={{ width, height }} />
}

function LogoTextIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={logoText} alt="Logo Text" className={className} style={{ width, height }} />
}

function QAIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={qAndAImage} alt="Q and A about Loan" className={className} style={{ width, height }} />
}
function Frame1 (props: ImageProps) {
  const { className, width, height } = props
  return <img src={frame1} alt="Frame1" className={className} style={{ width, height }} />
}
function CalendarIcon(props: ImageProps) {
  const { className, width, height } = props
  return <img src={Calendar} alt="Calendar" className={className} style={{ width, height }} />
}

// --- export all components ---
export {
  Logo,
  ArrowLeftIcon,
  ArrowRightIcon,
  InterestIcon,
  LoanImageOne,
  LogoTextIcon,
  QAIcon,
  Frame1,
  CalendarIcon
}
