import React from "react";
import { useState } from "react";
import imgJson from "../../assets/json/img.json";
import { v4 as uuidv4 } from "uuid";

function Skill() {
  const [active, setActive] = useState("All");
  const [filter, setFilter] = useState(imgJson);
  const setData = (type) => {
    setActive(type);
    if (!type.includes("All")) {
      setFilter(imgJson.filter((item) => item.type.includes(type)));
    } else {
      setFilter(imgJson);
    }
  };

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
            <li
              className={active === "All" ? "active" : ""}
              onClick={() => setData("All")}
            >
              All
            </li>
            <li
              className={active === "Language" ? "active" : ""}
              onClick={() => setData("Language")}
            >
              Language
            </li>
            <li
              className={active === "Framework&Libery" ? "active" : ""}
              onClick={() => setData("Framework&Libery")}
            >
              Framework&Libery
            </li>
            <li
              className={active === "Other" ? "active" : ""}
              onClick={() => setData("Other")}
            >
              Other
            </li>
          </ul>
        </nav>
        <div className="grid-container">
          {filter.map((item) => {
            return (
              <div key={uuidv4()} className="grid-item">
                <img src={item.path} alt="" />
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
