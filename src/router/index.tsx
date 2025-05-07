import { Route, BrowserRouter, Routes } from "react-router";
import DashboardPage from "../pages/Dashboard/Page";

export default function MainRouter() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<DashboardPage />} />
      
        </Routes>
    </BrowserRouter>
  );
}