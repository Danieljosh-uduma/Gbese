import { Route, BrowserRouter, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Page";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import SplashManager from "../hooks/SplashManager";


export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashManager />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<SplashScreen />} />
        </Routes>
    </BrowserRouter>
  );
}