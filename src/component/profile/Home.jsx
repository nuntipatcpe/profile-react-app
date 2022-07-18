import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function Home() {
  return (
    <div id="home" className="home">
      <div className="container">
        <div className="home-item">
          <div className="item-1">
            <div className="row-1">
              <p className="text-highlight text-small">H</p>
              <p className="text-small">ello...</p>
            </div>

            <div className="row-1">
              <p className="text-highlight">I</p>
              <p className="">'am</p>
              <p className="text-highlight">N</p>
              <p className="">untipat</p>
            </div>

            <p className="text-small fonts-2">Software Developer </p>
          </div>

          <div className="background">
            <picture></picture>
          </div>
        </div>
      </div>
      <div className="profile-contrack">
         <i><AiFillGithub className="git-icon"/></i>
        <div className="email"><MdEmail className="email-icon"/>nuntipat.rukpo@gmail.com</div>
      </div>
       
    </div>
  );
}

export default Home;
