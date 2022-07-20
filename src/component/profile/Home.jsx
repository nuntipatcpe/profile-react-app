import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function Home() {
  return (
    <div id="home" className="home">
      <div className="container">

    
        <div className="container-top">

        <div className="content">

          <div className="item">
            <h1 className="active">H</h1>
            <p className="text-small">ello...</p>
          </div>
          
          <div className="item big-size">
            <p className="active ">I'</p>
            <p className="">am</p>
            <p className="active">&nbsp;N</p>
            <p className="">untipat</p>
          </div>
          <p className="item active">Software Developer </p>

        
        </div>
          
        
          <div className="profile-contrack">
            <i>
              <AiFillGithub className="git-icon" />
            </i>
            <div className="email">
              <MdEmail className="email-icon" />
              <p> nuntipat.rukpo@gmail.com</p>
            </div>
          </div>

          <div className="background">
          <picture></picture>
        </div>
        </div>
      

          
      

  
      </div>
    </div>
  );
}

export default Home;
// import React from "react";
// import { AiFillGithub } from 'react-icons/ai';
// import { MdEmail } from 'react-icons/md';

// function Home() {
//   return (
//     <div id="home" className="home">
//       <div className="container">

//         <div className="hello-container">

//         <div className="container-top">
//            <div className="row-1">
//             <p className="text-highlight text-small">H</p>
//             <p className="text-small">ello...</p>
//           </div>
          
//           <div className="row-1">
//             <p className="text-highlight">I</p>
//             <p className="">'am</p>
//             <p className="text-highlight">&nbsp;N</p>
//             <p className="">untipat</p>
//           </div>
//           <p className="text-small fonts-2">Software Developer </p>
//         </div>
      

//           <div className="profile-contrack">
//             <i>
//               <AiFillGithub className="git-icon" />
//             </i>
//             <div className="email">
//               <MdEmail className="email-icon" />
//               <p> nuntipat.rukpo@gmail.com</p>
//             </div>
//           </div>
          
//         </div>

//         <div className="background">
//           <picture></picture>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Home;
