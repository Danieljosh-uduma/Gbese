import MainRouter from './router'
import AuthProvider from './components/auth/AuthProvider'


import './App.css'

function App() {
    
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>

  )
}

export default App;
