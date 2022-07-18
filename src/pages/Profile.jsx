import React from "react";

import Home from "../component/profile/Home";
import About from "../component/profile/About";
import Navbar from "../component/profile/NavBar";
import Resume from "../component/profile/Resume";

function profile() {
  return (
    <div  className="profile">
      <Navbar />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default profile;
