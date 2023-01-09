import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";

import './App.css';

import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
