import Header from "./components/Header";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
