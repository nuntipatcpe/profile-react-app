import React from "react";

import Home from "../component/profile/Home";
import About from "../component/profile/About";
import Navbar from "../component/profile/NavBar";
import Resume from "../component/profile/Resume";
import Skills from "../component/profile/Skills";
import Portfolio from "../component/profile/Portfolio";
import Footer from "../component/profile/Footer";

function profile() {
  return (
    <div  className="profile">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default profile;
