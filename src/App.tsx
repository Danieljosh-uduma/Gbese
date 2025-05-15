import { Route, Routes } from 'react-router'
import './App.css'
import Otp from './pages/Otp page/Otp'
import MarketPlace from './pages/Market Place/MarketPlace'
import DebtRequest from './pages/Debt Request/DebtRequest'
import PayDebt from './pages/Pay debt/PayDebt'
import Successful from './pages/Successful/Successful'
import RequestMoney from './pages/Request Money/RequestMoney'
import ReviewRequestModal from './pages/Request Money/ReviewRequestModal'
import RequestSentModal from './pages/Request Money/RequestSentModal'
import PaymentNotifications from './pages/PaymentNotifications'

function App() {
    
  return (
    <Routes>
      <Route  path='/otp' element={<Otp />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/debtrequest' element={<DebtRequest />} />
      <Route path='/paydebt' element={<PayDebt />} />
      <Route path='/successful' element={<Successful />} />
      <Route path='/requestmoney' element={<RequestMoney />} />
      <Route path='/reviewrequest' element={<ReviewRequestModal />} />
      <Route path='/requestsent' element={<RequestSentModal />} />
      <Route path='/notification' element={<PaymentNotifications />} />



    </Routes>

  )
}

export default App
