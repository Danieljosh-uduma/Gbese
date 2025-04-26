import { Route, Link, BrowserRouter, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Page";


export default function MainRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Gbese Bank Account</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}