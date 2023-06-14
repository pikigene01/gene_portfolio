import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function WholeApp() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Services />
      <Counter />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
