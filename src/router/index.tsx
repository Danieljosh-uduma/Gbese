import { Route, BrowserRouter, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Page";


export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}