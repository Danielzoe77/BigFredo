import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WorkinStep from "./components/WorkinStep";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import SliderServ from "./components/SliderSer";

import Blog from "./components/Blog";
function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Counter />
      {/* <SliderServ/> */}

      <WorkinStep />
      {/* <Pricing /> */}
      <Blog />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
