import React from "react";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
