//import React from "react";
// import "./Home.css";
// export const Home=()=> {
//   return (
//     <div className="home">
//       <h1>Hi, I'm Laiba Munir</h1>
//       <p>
//         A Front-End Developer passionate about building beautiful, responsive
//         websites using HTML, CSS, JavaScript, and React.
//       </p>
//       <button>View My Projects</button>
//     </div>
//   );
// }
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h1>Hi, I'm Laiba Munir</h1>
        <p>
          A Front-End Developer passionate about creating responsive and
          elegant websites using HTML, CSS, and React.
        </p>
        <Link to="/portfolio" className="btn">
          View My Portfolio
        </Link>
      </div>
    </div>
  );
};
