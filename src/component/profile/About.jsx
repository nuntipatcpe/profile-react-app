import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import bio from '../../assets/json/bio.json'

function Experience() {

  const [data,setdata] = useState('about');
  const [color,setColor] = useState('about');
 
  const setActive = (str)=>{
    setdata(str);
    setColor(str);
  }


  return (
    <div id="about" className="about">
      <div className="container">

        <nav className="nav-about">
          <ul>
            <li className={color === 'about' ? 'red' : 'back'} tabIndex="0" onClick={()=>{setActive('about')}}> About us</li>
            <li className={color === 'project' ? 'red' : 'back'} tabIndex="0" onClick={()=>{setActive('project')}}> Project</li>
          </ul>
        </nav>

        <div className="data-about">
          <h1>MY BIOGRAPHY</h1>
          
          {bio.filter((item)=>item.id===data).map((item)=>{
              return (
                <p key={item.id}>{item.data}</p>
              )
            })}
          {/* <p lang="th">
           ๆไก้ๆไนกีรั้ๆไนกรๆไ้่กรนย่ๆไยกร่ๆไยergergergergกร่ๆไยกร่ๆไยรก่ฟ
          </p> */}
        
        </div>
      </div>
    </div>
  );
}

export default Experience;
