import React from "react";
import Header from "./Components/Header/Header";
import Glav from "./Components/Glav";
import Footer from "./Components/Footer";
import School from "./Components/School/School";
import Error from "./Components/Error";
import Onas from "./Components/Onas/Onas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stats from "./Components/Stats/Stats";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Glav />} path="/" />
        <Route element={<School />} path="/information" />
        <Route element={<Onas />} path="/onas" />
        <Route element={<Stats />} path="/pod" />Error
Error
Error
        <Route element={<Error />} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
