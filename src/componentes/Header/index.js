import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="./images/logo_net.svg" alt="logo netflix"></img>
          {/* <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"  ></img>  */}
        </a>
      </div>
      <div className="dev--user">
        <img src="./images/luri_ia.jpg" alt="imagem usuario"></img>
      </div>
    </header>
  );
};
