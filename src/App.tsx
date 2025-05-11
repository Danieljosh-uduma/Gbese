import { Route, Routes } from 'react-router'
import './App.css'
import Otp from './pages/Otp page/Otp'
import MarketPlace from './pages/Market Place/MarketPlace'
import DebtRequest from './pages/Debt Request/DebtRequest'
import PayDebt from './pages/Pay debt/PayDebt'
import Successful from './pages/Successful/Successful'

function App() {
    
  return (
    <Routes>
      <Route  path='/otp' element={<Otp />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/debtrequest' element={<DebtRequest />} />
      <Route path='/paydebt' element={<PayDebt />} />
      <Route path='/successul' element={<Successful />} />


    </Routes>

  )
}

export default App
