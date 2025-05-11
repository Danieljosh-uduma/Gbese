import { Route, Routes } from 'react-router'
import './App.css'
import Otp from './pages/Otp page/Otp'
import MarketPlace from './pages/Market Place/MarketPlace'
import DebtRequest from './pages/Debt Request/DebtRequest'
import PayDebt from './pages/Pay debt/PayDebt'

function App() {
    
  return (
    <Routes>
      <Route  path='/otp' element={<Otp />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/debtrequest' element={<DebtRequest />} />
      <Route path='/paydebt' element={<PayDebt />} />


    </Routes>

  )
}

export default App
