import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import OurProducts from "./OurProducts";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
