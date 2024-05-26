import { useState } from "react";
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import MainIndex from "./componets/Main/Index/MainIndex";

function App() {
  return (
    <>
      <Header />
      <MainIndex />
      <Footer />
    </>
  );
}

export default App;
