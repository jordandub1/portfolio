import Header from "./components/Header";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
