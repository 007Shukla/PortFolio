import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Expriance from "./components/Expriance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
export default function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio /> 
      <Expriance/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster/>
    </>
  );
}