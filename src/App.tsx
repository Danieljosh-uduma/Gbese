import { Route, Routes } from 'react-router'
import './App.css'
import Otp from './pages/Otp page/Otp'
import MarketPlace from './pages/Market Place/MarketPlace'

function App() {
    
  return (
    <Routes>
      <Route  path='/otp' element={<Otp />} />
      <Route path='/marketplace' element={<MarketPlace />} />

    </Routes>

  )
}

export default App
