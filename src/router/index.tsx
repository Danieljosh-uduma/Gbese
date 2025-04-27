import { Route,  BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "../pages/Login/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";

export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpPage/>} />
           < Route path="/login" element={<LoginPage/>} />
        </Routes>
    
    </BrowserRouter>
  );
}