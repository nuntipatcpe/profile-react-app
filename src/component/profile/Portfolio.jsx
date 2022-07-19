import React from "react";
import { useState } from "react";
import project from '../../assets/json/project.json'
import { v4 as uuidv4 } from "uuid";


function Portfolio() {
  // const [search,setSearch] = useState(project)
  const [data,setData] = useState(project)



  const filter =(str)=>{
    setData(data.filter((item)=>(item.name.includes(str))|| item.type.includes(str)))
    if(str.length===0){
      setData(project);
    }
  }
  // console.log(search);
  return (
    <div className="portfolio">
      <div className="container">
        <header>
          <p className="active">W</p>
          <p>hat i do</p>
          <p className="active">?</p>
        </header>

        <div className="input">
          <input type="text" placeholder="Search name or type" onChange={(e)=>filter(e.target.value)}/>
        </div>
        <div className="grit-container">
          {/* grid item */}

          {
            data.map((item)=>{
              return(
                 <div key={uuidv4()} className="grid-item">
            <div className="card">
              <div className="title">{item.name}</div>
              <img
                src={item.img}
                alt=""
              />
              <div className="card-container">
                <p className="type">Type: {item.type}</p>
                <p className="deacription">
                  Deacription : {item.deacription}
                </p>
              </div>
              <div className="btn-card">
                <button>View</button>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
