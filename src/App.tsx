import MainRouter from './router'
import AuthProvider from './components/auth/AuthProvider'



import './App.css'
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
    
  return (
    // <AuthProvider>
    //   <MainRouter />
    // </AuthProvider>
    <ProfilePage />
  )
}

export default App;
