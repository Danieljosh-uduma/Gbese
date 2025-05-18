// src/components/Icon.tsx
import mainLogo from '../../assets/images/icons/logo-main.svg'
import whiteLogo from '../../assets/images/icons/Logo-white.svg'
import arrowLeft from '../../assets/images/icons/arrow-left.svg'
import arrowRight from '../../assets/images/icons/arrow-right.svg'
import interestImg from '../../assets/images/icons/Intrest-on-loan.svg'
import loanImg1 from '../../assets/images/icons/loanImg.svg'
import logoText from '../../assets/images/icons/Logo-text.png'
import qAndAImage from '../../assets/images/icons/Q and A about loan.svg'
import frame1 from '../../assets/images/icons/Frame 1.svg'
import calendar from '../../assets/images/icons/calendar.svg'
import adImage from '../../assets/images/icons/Ad-image.svg'
import addSquare from '../../assets/images/icons/add-icon.png'
import arrowDown from '../../assets/images/icons/arrow-down.svg'
import arrowSwap from '../../assets/images/icons/arrow-swap-horizontal.svg'
import coin from '../../assets/images/icons/coin.svg'
import heartAdd from '../../assets/images/icons/heart-add.svg'
import notification from '../../assets/images/icons/notificaton.png'
import sendSquare from '../../assets/images/icons/send-sqaure.png'
// import settings from '../../assets/images/icons/setting-2.svg'
import shop from '../../assets/images/icons/shop.svg'
import sidebarPics from '../../assets/images/icons/Side-Bar-Component.svg'
import user from '../../assets/images/icons/user.svg'
import lovely from '../../assets/images/icons/lovely.svg'
import dashboard from '../../assets/images/icons/dasboard.svg'
import emptyWallet from '../../assets/images/icons/empty-wallet.svg'
import receiptext from '../../assets/images/icons/receipt-text.svg' 
import add from '../../assets/images/icons/add.svg'
import send from '../../assets/images/icons/send-sqaure.png'
import copy from '../../assets/images/icons/copy.svg'
import ticksquare from '../../assets/images/icons/tick-square.png'
import vector from '../../assets/images/icons/Vector.png';
import closecircle from '../../assets/images/icons/close-circle.svg';
import ticksquareupcoming from '../../assets/images/icons/tick-square-upcomin.svg';
import ticksquareschedule from '../../assets/images/icons/tick-square-schedule.svg';
import mobileaccepted from '../../assets/images/icons/MobileIconAccepted.svg';
import mobileupcoming from '../../assets/images/icons/Mobileiconupcoming.svg';
import mobileschedule from '../../assets/images/icons/Mobileiconschedule.svg';
import information from '../../assets/images/icons/information.svg'
import Search from '../../assets/images/icons/search.svg'
import camera from '../../assets/images/icons/camera.svg'
import informationgreen   from '../../assets/images/icons/information-green.svg'
import coindebt  from '../../assets/images/icons/stash-coin.svg'
import receivemoney from '../../assets/images/icons/money-recive.svg'
import money from '../../assets/images/icons/money-4.svg'
import tickcirlcle from '../../assets/images/icons/tick-circle.svg'
import filter from '../../assets/images/icons/filter.svg'
import screenshot from '../../assets/images/icons/screenshot.svg'
import maximize from '../../assets/images/icons/maximize-4.svg'
import receipt from '../../assets/images/icons/Receipt.svg'
import arrowback from '../../assets/images/icons/arrow-left-black.svg'
import house from '../../assets/images/icons/house-2.svg'
import documenextext from '../../assets/images/icons/document-text.svg'
import infocircle from '../../assets/images/icons/info-circle.svg'
import frametier from '../../assets/images/icons/Frame-tier.svg'
import edit from '../../assets/images/icons/edit.svg'
import documentupload from '../../assets/images/icons/document-upload.svg'
import tickcirclegreen from '../../assets/images/icons/tick-circle-green.svg'  
import infocirclered from "../../assets/images/icons/info-circle-red.svg";

// --- types ---
type LogoProps = {
  type?: 'white' | 'green';
  className?: string;
};

type ImageProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

// --- components ---
function Logo({ type, className }: LogoProps) {
  if (type === 'white') {
    return <img src={whiteLogo} alt="Logo" className={className} />;
  } else {
    return <img src={mainLogo} alt="Logo" className={className} />;
  }
}

function ArrowLeftIcon({ className, width, height }: ImageProps) {
  return <img src={arrowLeft} alt="Arrow Left" className={className} style={{ width, height }} />;
}

function ArrowRightIcon({ className, width, height }: ImageProps) {
  return <img src={arrowRight} alt="Arrow Right" className={className} style={{ width, height }} />;
}

function InterestIcon({ className, width, height }: ImageProps) {
  return <img src={interestImg} alt="Interest on Loan" className={className} style={{ width, height }} />;
}

function LoanImageOne({ className, width, height }: ImageProps) {
  return <img src={loanImg1} alt="Loan Image" className={className} style={{ width, height }} />;
}

function LogoTextIcon({ className, width, height }: ImageProps) {
  return <img src={logoText} alt="Logo Text" className={className} style={{ width, height }} />;
}

function QAIcon({ className, width, height }: ImageProps) {
  return <img src={qAndAImage} alt="Q and A about Loan" className={className} style={{ width, height }} />;
}

function Frame1({ className, width, height }: ImageProps) {
  return <img src={frame1} alt="Frame 1" className={className} style={{ width, height }} />;
}

function CalendarIcon({ className, width, height }: ImageProps) {
  return <img src={calendar} alt="Calendar" className={className} style={{ width, height }} />;
}

function AdImageIcon({ className, width, height }: ImageProps) {
  return <img src={adImage} alt="Ad Image" className={className} style={{ width, height }} />;
}

function AddSquareIcon({ className, width, height }: ImageProps) {
  return <img src={addSquare} alt="Add Square" className={className} style={{ width, height }} />;
}

function ArrowSwapIcon({ className, width, height }: ImageProps) {
  return <img src={arrowSwap} alt="Arrow Swap" className={className} style={{ width, height }} />;
}

function CoinIcon({ className, width, height }: ImageProps) {
  return <img src={coin} alt="Coin" className={className} style={{ width, height }} />;
}

function HeartAddIcon({ className, width, height }: ImageProps) {
  return <img src={heartAdd} alt="Heart Add" className={className} style={{ width, height }} />;
}

function NotificationIcon({ className, width, height }: ImageProps) {
  return <img src={notification} alt="Notification" className={className} style={{ width, height }} />;
}

function SendSquareIcon({ className, width, height }: ImageProps) {
  return <img src={sendSquare} alt="Send Square" className={className} style={{ width, height }} />;
}

// function SettingsIcon({ className, width, height }: ImageProps) {
//   // return <img src={settings} alt="Settings" className={className} style={{ width, height }} />;
// }

function ShopIcon({ className, width, height }: ImageProps) {
  return <img src={shop} alt="Shop" className={className} style={{ width, height }} />;
}

function SidebarPicsIcon({ className, width, height }: ImageProps) {
  return <img src={sidebarPics} alt="Sidebar Pics" className={className} style={{ width, height }} />;
}

function UserIcon({ className, width, height }: ImageProps) {
  return <img src={user} alt="User" className={className} style={{ width, height }} />;
}

function ArrowDownIcon({ className, width, height }: ImageProps) {
  return <img src={arrowDown} alt="Arrow Down" className={className} style={{ width, height }} />;
}

function LovelyIcon({ className, width, height }: ImageProps) {
  return <img src={lovely} alt="Lovely" className={className} style={{ width, height }} />;
}

function EmptyWalletIcon({ className, width, height }: ImageProps) {
  return <img src={emptyWallet} alt="Empty Wallet" className={className} style={{ width, height }} />;
}

function DashboardIcon({ className, width, height }: ImageProps) {
  return <img src={dashboard} alt="Dashboard" className={className} style={{ width, height }} />;
}

function ReceiptTextIcon({ className, width, height }: ImageProps) {
  return <img src={receiptext} alt="Receipt Text" className={className} style={{ width, height }} />;
}

function SendIcon({ className, width, height }: ImageProps) {
  return <img src={send} alt="Send" className={className} style={{ width, height }} />;
}

function AddIcon({ className, width, height }: ImageProps) {
  return <img src={add} alt="Add" className={className} style={{ width, height }} />;
}

function CopyIcon({ className, width, height }: ImageProps) {
  return <img src={copy} alt="Copy" className={className} style={{ width, height }} />;
}

function TickSquareAccepted({ className, width, height }: ImageProps) {
  return <img src={ticksquare} alt="Tick Square Accepted" className={className} style={{ width, height }} />;
}

function TickSquareUpcoming({ className, width, height }: ImageProps) {
  return <img src={ticksquareupcoming} alt="Tick Square Upcoming" className={className} style={{ width, height }} />;
}

function TickSquareScheduled({ className, width, height }: ImageProps) {
  return <img src={ticksquareschedule} alt="Tick Square Scheduled" className={className} style={{ width, height }} />;
}

function MobileIconAccepted({ className, width, height }: ImageProps) {
  return <img src={mobileaccepted} alt="Mobile Icon Accepted" className={className} style={{ width, height }} />;
}

function MobileIconUpcoming({ className, width, height }: ImageProps) {
  return <img src={mobileupcoming} alt="Mobile Icon Upcoming" className={className} style={{ width, height }} />;
}

function MobileIconScheduled({ className, width, height }: ImageProps) {
  return <img src={mobileschedule} alt="Mobile Icon Scheduled" className={className} style={{ width, height }} />;
}

function VectorIcon({ className, width, height }: ImageProps) {
  return <img src={vector} alt="Vector" className={className} style={{ width, height }} />;
}

function CloseCircle({ className, width, height }: ImageProps) {
  return <img src={closecircle} alt="Close Circle" className={className} style={{ width, height }} />;
}

function InformationIcon({ className, width, height }: ImageProps) {
  return <img src={information} alt="Close Circle" className={className} style={{ width, height }} />;
}
function SearchIcon({ className, width, height }: ImageProps) {
  return <img src={Search} alt="Close Circle" className={className} style={{ width, height }} />;
}
function CameraIcon ({ className, width, height }: ImageProps) {
  return <img src={camera} alt="Close Circle" className={className} style={{ width, height }} />;
}

function InformationGreen({ className, width, height }: ImageProps) {
  return <img src={informationgreen} alt="Close Circle" className={className} style={{ width, height }} />;
}
function StashCoinIcon({ className, width, height }: ImageProps) {
  return <img src={coindebt} alt="Close Circle" className={className} style={{ width, height }} />;
}
function MoneyRecieve({ className, width, height }: ImageProps) {
  return <img src={receivemoney} alt="Close Circle" className={className} style={{ width, height }} />;
}
function MoneyDebt({ className, width, height }: ImageProps) {
  return <img src={money} alt="Close Circle" className={className} style={{ width, height }} />;
}
function TickCircleIcon({ className, width, height }: ImageProps) {
  return <img src={tickcirlcle} alt="Close Circle" className={className} style={{ width, height }} />;
}
function FilterIcon({ className, width, height }: ImageProps) {
  return <img src={filter} alt="Close Circle" className={className} style={{ width, height }} />;
}
function ScreenShotIcon({ className, width, height }: ImageProps) {
  return <img src={screenshot} alt="Close Circle" className={className} style={{ width, height }} />;
}
function MaximizeIcon({ className, width, height }: ImageProps) {
  return <img src={maximize} alt="Close Circle" className={className} style={{ width, height }} />;
}
function ReceiptIcon({ className, width, height }: ImageProps) {
  return <img src={receipt} alt="Close Circle" className={className} style={{ width, height }} />;
}
function ArrowBackLeft({ className, width, height }: ImageProps) {
  return <img src={arrowback} alt="Close Circle" className={className} style={{ width, height }} />;
}
function HouseIcon({ className, width, height }: ImageProps) {
  return <img src={house} alt="Close Circle" className={className} style={{ width, height }} />;
}
function DocuementTextIcon({ className, width, height }: ImageProps) {
  return <img src={documenextext} alt="Close Circle" className={className} style={{ width, height }} />;
}
function InfoCirclIcon({ className, width, height }: ImageProps) {
  return <img src={infocircle} alt="Close Circle" className={className} style={{ width, height }} />;
}
function FrameTierIcon({ className, width, height }: ImageProps) {
  return <img src={frametier} alt="Close Circle" className={className} style={{ width, height }} />;
}
function EditIcon({ className, width, height }: ImageProps) {
  return <img src={edit} alt="Close Circle" className={className} style={{ width, height }} />;
}
function DocumentUpload({ className, width, height }: ImageProps) {
  return <img src={documentupload} alt="Close Circle" className={className} style={{ width, height }} />;
}
function TickCircleGreen({ className, width, height }: ImageProps) {
  return <img src={tickcirclegreen} alt="Close Circle" className={className} style={{ width, height }} />;
}
function InfoCircleRed({ className, width, height }: ImageProps) {
  return <img src={infocirclered} alt="Close Circle" className={className} style={{ width, height }} />;
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
  CalendarIcon,
  AdImageIcon,
  AddSquareIcon,
  ArrowSwapIcon,
  CoinIcon,
  HeartAddIcon,
  NotificationIcon,
  SendSquareIcon,
  // SettingsIcon,
  ShopIcon,
  SidebarPicsIcon,
  UserIcon,
  ArrowDownIcon,
  LovelyIcon,
  EmptyWalletIcon,
  DashboardIcon,
  ReceiptTextIcon,
  SendIcon,
  AddIcon,
  CopyIcon,
  TickSquareAccepted,
  TickSquareUpcoming,
  TickSquareScheduled,
  MobileIconAccepted,
  MobileIconUpcoming,
  MobileIconScheduled,
  VectorIcon,
  CloseCircle,
  InformationIcon,
  SearchIcon,
  CameraIcon,
  InformationGreen,
  StashCoinIcon,
  MoneyRecieve,
  MoneyDebt,
  TickCircleIcon,
  FilterIcon,
  ScreenShotIcon,
  MaximizeIcon,
  ReceiptIcon,
  ArrowBackLeft,
  HouseIcon,
  DocuementTextIcon,
  InfoCirclIcon,
  FrameTierIcon,
  EditIcon,
  DocumentUpload,
  TickCircleGreen,
  InfoCircleRed,

};
