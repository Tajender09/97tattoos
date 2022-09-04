import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./Routes/Shop";
import About from "./Routes/About";
import Home from "./Routes/Home";
import PortfolioView from "./Routes/Portfolio";
import Categories from "./Routes/Categories";
import Category from "./components/Category";

function App() {
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
    </div>
  );
}

export default App;
