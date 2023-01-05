import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav"

function App() {
  return (
    <>
      {/* <p>is it rendering?</p> */}
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </>
  );
}

export default App;
