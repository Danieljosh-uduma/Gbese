import { Route, BrowserRouter, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Page";
import Button from "../components/common/button/Button";
import { getOTP } from "../services/Api";
// import { useEffect } from "react";


export default function MainRouter() {

  function handleClick() {
    getOTP('08061542504')
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }

  return (
    <BrowserRouter>
        <Button size="large" onClick={handleClick}>
          go to Google
        </Button>
        <Button>
           jello
        </Button>
        <Routes>
            <Route path="/" element={dashboard} />
        </Routes>
    </BrowserRouter>
  );
}

const dashboard =  <Dashboard />// Removed redundant declaration of Dashboard