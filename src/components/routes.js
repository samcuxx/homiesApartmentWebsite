import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Apartments from "../pages/Apartments";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Details from "../pages/Details";
import News from "../pages/News";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="apartments" element={<Apartments />} />
        <Route path="news" element={<News />} />
        <Route path="/apartmentdetail" element={<Details />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
