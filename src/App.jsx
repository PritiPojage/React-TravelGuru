
import { BrowserRouter, Routes, Route } from "react-router-dom";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/destinations";
import Careers from "./pages/careers";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    
  );
}
export default App;
