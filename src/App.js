import "./App.css";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop/Shop";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <hr />
      <Shop />
      <hr />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
