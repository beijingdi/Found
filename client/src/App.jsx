import React from "react";

import { Route, Routes} from "react-router-dom";
import { useCookies } from "react-cookie";


import './App.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import BookEventPage from "./pages/BookEventPage";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}>
        </Route>
        <Route exact path="/trips" element={<BookEventPage/>}>
        </Route>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
