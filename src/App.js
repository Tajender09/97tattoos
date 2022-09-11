import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./Routes/Shop";
import About from "./Routes/About";
import Home from "./Routes/Home";
import PortfolioView from "./Routes/Portfolio";
import Categories from "./Routes/Categories";
import Category from "./components/Category";
import ConsultationModal from "./components/ConsultationModal";

function App() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setNum(Math.random());
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/97tattoos" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/portfolio" element={<PortfolioView />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="categories=:name" element={<Category />} />
        </Routes>
        <Footer />
      </Router>
      <ConsultationModal show={show} num={num} />
    </div>
  );
}

export default App;
