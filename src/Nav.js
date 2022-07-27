import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll");
    };
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
