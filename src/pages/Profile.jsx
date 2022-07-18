import React from "react";

import Home from "../component/profile/Home";
import About from "../component/profile/About";
import Navbar from "../component/profile/NavBar";

function profile() {
  return (
    <div className="profile">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default profile;
