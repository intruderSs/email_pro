import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './components/Dash';
import Email from "./components/Email";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dash/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;