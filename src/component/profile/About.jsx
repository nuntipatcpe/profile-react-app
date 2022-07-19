import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import bio from "../../assets/json/bio.json";

function Experience() {
  const [data, setdata] = useState(bio.filter((item) => item.page === "about"));
  const [color, setColor] = useState("about");

  const setActive = (str) => {
    setdata(bio.filter((item) => item.page.includes(str)));
    setColor(str);
  };
  console.log(data);

  return (
    <div id="about" className="about">
      <div className="container">

        <div className="container-left">
          <nav className="nav-about">
            <ul>
              <li
                className={color === "about" ? "red" : "back"}
                tabIndex="0"
                onClick={() => {
                  setActive("about");
                }}
              >
                About us
              </li>
              <li
                className={color === "project" ? "red" : "back"}
                tabIndex="0"
                onClick={() => {
                  setActive("project");
                }}
              >
                Project
               
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="container-rigth">
  
          <div className="topic">
            <div className="text">
              <div className="text-item-1">M</div>
              <div className="text-item-2">Y BIOGRAPHY</div>
            </div>
          </div>

          <div className="content">
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <p>{item.data}</p>
                </div>
              );
            })}
          </div>

          {/* <p lang="th">
           ๆไก้ๆไนกีรั้ๆไนกรๆไ้่กรนย่ๆไยกร่ๆไยergergergergกร่ๆไยกร่ๆไยรก่ฟ
          </p> */}
       
        </div>
      </div>
    </div>
  );
}

export default Experience;
