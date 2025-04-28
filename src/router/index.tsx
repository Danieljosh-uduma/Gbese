import { Route, BrowserRouter, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Page";
import Button from "../components/common/button/Button";


export default function MainRouter() {
  return (
    <BrowserRouter>
        <Button size="large" url="signup">
          go to Google
        </Button>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}