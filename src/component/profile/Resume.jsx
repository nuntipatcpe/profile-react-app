import React from "react";
import { MdCastForEducation } from 'react-icons/md';
function Resume() {
  return (
    <div id="resume" className="resume">
      <div className="container">

        <div className="education-con">
          <div className="education-item">Education</div>
          <div className="data">
            <div className="data-1">
            <MdCastForEducation className="icon"/>
              <p>{"2561-2565"}</p>
              <p>{"มหาวิทยาลัยเทคโนโลยีมหานคร"}</p>
              <p>{"วิศวกรรมศาสตร์, คอมพิวเตอร์"}</p>
            </div>
            <div className="data-1">
              <MdCastForEducation className="icon"/>
              <p>{"2561-2565"}</p>
              <p>{"มหาวิทยาลัยเทคโนโลยีมหานคร"}</p>
              <p>{"วิศวกรรมศาสตร์, คอมพิวเตอร์"}</p>
            </div>
          </div>
        </div>

        <div className="experience-con">
        <div className="experience-item">Education</div>
          <div className="data">
            <div className="data-1">
            <MdCastForEducation className="icon"/>
              <p>{"2561-2565"}</p>
              <p>{"มหาวิทยาลัยเทคโนโลยีมหานคร"}</p>
              <p>{"วิศวกรรมศาสตร์, คอมพิวเตอร์"}</p>
            </div>
            <div className="data-1">
              <MdCastForEducation className="icon"/>
              <p>{"2561-2565"}</p>
              <p>{"มหาวิทยาลัยเทคโนโลยีมหานคร"}</p>
              <p>{"วิศวกรรมศาสตร์, คอมพิวเตอร์"}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Resume;
