import React from "react";
import { useState } from "react";
import project from "../../assets/json/project.json";
import { v4 as uuidv4 } from "uuid";
import DetailsComponent from "./portfolio/DetailsComponent";

function Portfolio() {
  const [data, setData] = useState(project);
  const [close, setClose] = useState(false);
  const [obj, setObj] = useState({});

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

  const hendleClose = (item) => {
    setClose(!close);
    setObj(item);
    // console.log(item);
  };
  // console.log(obj);

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
              <div
                key={uuidv4()}
                className="grid-item"
    
              >
                <div className="card"   onClick={() => hendleClose(item)}>
                  <div className="title">{item.name}</div>
                  <img src={item.img} alt="" />
                  <div className="card-container">
                    <p className="type">{item.type}</p>
                    <div className="deacription">
                      <h1> Deacription :</h1>
                      {item.deacription}
                    </div>
                  </div>
                </div>
                
                <div className="btn-card">
                    <a
                      target="_blank"
                      href="https://www.apple.com/th/"
                    >
                      {" "}
                      View Code
                    </a>
                  </div>
              </div>
            );
          })}
        </div>
      </div>

      {close ? (
        <div>
          <div className="close" onClick={() => setClose(!close)}>
            <a href="#details"></a>
          </div>
          <DetailsComponent item={obj} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Portfolio;
