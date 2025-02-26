import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About.test";
import Contact from "./pages/contact/Contact.test";
import Footer from "./components/footer/Footer.test";
import Blog from "./pages/blog/Blog.test"; 
import ToTheTop from "./components/tothetop/ToTheTop";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <ToTheTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
