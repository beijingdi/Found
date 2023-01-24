import React from "react";
import { Route, Routes} from "react-router-dom";

import './App.css';

import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
