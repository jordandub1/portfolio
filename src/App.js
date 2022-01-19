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
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/portfolio/" element={<About />} />
            <Route path="/portfolio/work" element={<Portfolio />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
