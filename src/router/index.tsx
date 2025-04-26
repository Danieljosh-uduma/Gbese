import { Route, BrowserRouter, Routes } from "react-router";
import SignUpPage from "../pages/Login/SignUpPage";


export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpPage/>} />
            
        </Routes>
    
    </BrowserRouter>
  );
}