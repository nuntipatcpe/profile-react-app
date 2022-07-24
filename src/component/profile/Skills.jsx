import React from "react";
import { useState } from "react";
import imgJson from "../../assets/json/img.json";
import { v4 as uuidv4 } from "uuid";

import { AiOutlineMenu } from "react-icons/ai";
import  { getImg } from '../../assets/imgs/icons';


function Skill() {
  const [active, setActive] = useState("All");
  const [filter, setFilter] = useState(getImg());

  const [toggleNav, setToggleNav] = useState(false);


  // console.log(getImg());
  
  const setData = (type) => {
    setActive(type);
    if (!type.includes("All")) {
      setFilter(getImg().filter((item) => item.type.includes(type)));
    } else {
      setFilter(getImg());
    }
  };

  const setHandleClickMenu=(str) =>{
    setData(str);
    setToggleNav(false);
  }



  return (
    <div id="skills" className="skills">
      <div className="container">
        <header>
         
          <div className="active">M</div>
          <div className="">y</div>
          <div className="active">&nbsp;S</div>
          <div className="">kills</div>
        </header>
        <nav>
          <ul>
          <div className={toggleNav?"text":"text non"}>{active}</div>
            <div className={toggleNav?"menu non":"menu"}>
              <li
              className={active === "All" ? "active" : ""}
              onClick={() => setHandleClickMenu("All")}
            >
            
              All
            </li>
            <li
              className={active === "Language" ? "active" : ""}
              onClick={() =>   setHandleClickMenu("Language")}
            >
              Language
            </li>
            <li
              className={active === "Framework&Libery" ? "active" : ""}
              onClick={() =>  setHandleClickMenu("Framework&Libery")}
            >
              Framework&Libery
            </li>
            <li
              className={active === "Other" ? "active" : ""}
              onClick={() =>  setHandleClickMenu("Other")
            }
            >
              Other
            </li>
            </div>
        
            <AiOutlineMenu className="navBar-none" onClick={()=>setToggleNav(!toggleNav)}/>
          </ul>

        </nav>
        <div className="grid-container">
          {filter.map((item) => {
            return (
              <div key={uuidv4()} className="grid-item">
                <img src={item.path} alt={item.topic} />
                <p>{item.topic}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
