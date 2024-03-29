import React from "react";
import { MdCastForEducation, MdWork } from "react-icons/md";
function Resume() {
  return (
    <div id="resume" className="resume">
      <div className="container">
        <div className="education-item">
          <p className="active">E</p>
          <p>ducation</p>
        </div>
        <div className="experience-item">
          <p className="active">E</p>
          <p>xperience</p>
        </div>

        <div className="education-con">
          <div className="data-1">
            <MdCastForEducation className="icon" />
            <h1>{"2561-2565"}</h1>
            <p>{"มหาวิทยาลัยเทคโนโลยีมหานคร"}</p>
            <p>{"วิศวกรรมศาสตร์, คอมพิวเตอร์"}</p>
          </div>
          <div className="data-1">
            <MdCastForEducation className="icon" />
            <h1>{"2554-2560"}</h1>
            <p>{"มัธยมวัดหนองจอก"}</p>
            <p>{"สาขา วิทยาศาสตร์-คณิตศาสตร์"}</p>
          </div>
        </div>

        <div className="experience-con">
          <div className="data-1">
            <MdWork className="icon" />
            <h1>{"2021-2022"}</h1>
            <p>{"Business Bulletin Service Co., Ltd."}</p>
            <p>{"Apprentice software developer"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
