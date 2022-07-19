import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [click, setClick] = useState(false);
  // console.log(click)

  return (
    <div className="navbar">
      <div className="container">
        <div className="head-con">
          <div className="logo">
            <a href="#home" onClick={()=>setClick(false)}>NUNTIPAT Rukpo</a>
          </div>

          <ul className={click ? "menu active" : "menu"}>
            <li>
              <a href="#about" onClick={()=>setClick(false)}>About</a>
            </li>
            <li>
              <a href="#resume" onClick={()=>setClick(false)}>Resume</a>
            </li>
            <li>
              <a href="#skills" onClick={()=>setClick(false)}>Skills</a>
            </li>
            <li>
              <a href="#portfolio" onClick={()=>setClick(false)}>Portfolio</a>
            </li>
            <li>
              <a href="#contract" onClick={()=>setClick(false)}>Contract</a>
            </li>
          </ul>
          <AiOutlineMenu
            className="logo-menu"
            onClick={() => setClick(!click)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import React,{useState} from 'react'
// import { AiOutlineMenu } from 'react-icons/ai';
// function Navbar() {

//   const [click,setClick] = useState(false);
//   // console.log(click)

//   return (
//     <div className='navbar'>
//        <div className='container'>

//         <div className="nav-item">
//           <p className='logo'><a href='#home'>NUNTIPAT Rukpo</a></p>
//           <AiOutlineMenu className='logo-menu' onClick={()=>setClick(!click)} />
//         <ul className={click ? "menu-active": "menu"}>
//             <li><a href='#about' onClick={()=>setClick(!click)} >About</a></li>
//             <li><a href='#resume' onClick={()=>setClick(!click)}>Resume</a></li>
//             <li><a href='#skills'onClick={()=>setClick(!click)}>Skills</a></li>
//             <li><a href='#portfolio' onClick={()=>setClick(!click)}>Portfolio</a></li>
//             <li><a href='#contract' onClick={()=>setClick(!click)}>Contract</a></li>
//         </ul>
//         </div>

//     </div>
//     </div>

//   )
// }

// export default Navbar
