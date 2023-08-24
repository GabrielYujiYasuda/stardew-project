import React from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

//
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
