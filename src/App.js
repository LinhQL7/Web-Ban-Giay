import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop/Shop";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
