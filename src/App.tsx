import { Route, Routes } from 'react-router'
import './App.css'
import Otp from './pages/Otp page/Otp'
import MarketPlace from './pages/Market Place/MarketPlace'
import DebtRequest from './pages/Debt Request/debtRequest'

function App() {
    
  return (
    <Routes>
      <Route  path='/otp' element={<Otp />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/debtrequest' element={<DebtRequest />} />

    </Routes>

  )
}

export default App
