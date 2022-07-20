import React from "react";

function DetailsComponent(props) {
  console.log(props);
  const data = {
    deacription: props.item.deacription,
    img: props.item.img,
    name: props.item.name,
    type: props.item.type,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur, vitae aliquid? Eos dolor tempora deleniti debitispariatur suscipit delectus facere?",
    language: "Javascript",
    framework: "react",
    library: "scss redux",
    other: "other",
    link: " https://react-test-nuntipat.netlify.app ",
  };

  return (
    <div className="details">
      <div id="card-container-id" className="card-container">
        <div className="card">
          <h2 className="topic">{data.name}</h2>
          <img src={data.img} alt="" />

          <div className="data">
            <ul className="dev-tool">
              <h2>Dev-tool </h2>
              <li>
                {" "}
                <h1> Language :</h1> &nbsp;{data.language}
              </li>
              <li>
                {" "}
                <h1>Framework or Libery :</h1> &nbsp;{data.framework}{" "}
              </li>
              <li>
                <h1> Other :</h1> &nbsp; {data.other}
              </li>
              {/* <li>{data.link}</li> */}
            </ul>
            <div className="content">
              <h2>Description :</h2>
              {data.content}
            </div>
            <div className="link">
              <h1>Link : </h1>
              {data.link}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
