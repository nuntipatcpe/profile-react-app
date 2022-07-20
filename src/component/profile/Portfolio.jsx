import React from "react";
import { useState } from "react";
import project from "../../assets/json/project.json";
import { v4 as uuidv4 } from "uuid";

function Portfolio() {
  // console data = project.map((item))
  const [data, setData] = useState(project);

  const filter = (str) => {
    let upStr = str.toUpperCase();

    setData(
      data.filter(
        (item) =>
          item.name.toUpperCase().includes(upStr) ||
          item.type.toUpperCase().includes(upStr)
      )
    );
    if (str.length === 0) {
      setData(project);
    }
  };
  // console.log(search);
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <header>
          <p className="active">W</p>
          <p>hat i do</p>
          <p className="active">?</p>
        </header>

        <div className="input">
          <input
            type="text"
            placeholder="Search name or position"
            onChange={(e) => filter(e.target.value)}
          />
        </div>
        
        <div className="grit-container">
          {/* grid item */}

          {data.map((item) => {
            return (
              <div key={uuidv4()} className="grid-item">
                <div className="card">
                  <div className="title">{item.name}</div>
                  <img src={item.img} alt="" />
                  <div className="card-container">
                    <p className="type">{item.type}</p>
                    <div className="deacription">
                      <h1> Deacription :</h1>
                      {item.deacription}
                    </div>
                  </div>

                  <div className="btn-card">
                    <button>View</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
