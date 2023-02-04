import React from "react";

import { Route, Routes} from "react-router-dom";
import { useCookies } from "react-cookie";


import './App.css';

import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {
  const [cookies,setCookie,removeCookie] = useCookies(["user"]);

  return (
    <>
      <Nav
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <Routes>
        <Route exact path="/" element={<MainPage/>}>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
