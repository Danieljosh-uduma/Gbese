import MainRouter from './router'
import AuthProvider from './components/auth/AuthProvider'
import SendMoney from './pages/Sendmoney/SendMoneyPage'
import './App.css'

function App() {
    
  return (
    // <AuthProvider>
    //   <MainRouter />
    // </AuthProvider>
    <SendMoney />
  )
}

export default App;
