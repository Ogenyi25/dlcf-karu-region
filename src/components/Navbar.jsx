import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const container = useRef()

  useEffect(() => {
    document.addEventListener("scroll", e => {
      if (window.pageYOffset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : null} `} ref={container} >
      <div className="header col-md-1">
        <img className="img" src={require("../assets/images/logo.png")} alt="" />
      </div>
      <div className="body col-md-2">
        <ul>
          <li className="name">
            DlcfKaruRegion
          </li>
        </ul>
      </div>
      <div className="float-right col-md-9">
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Sermons</a>
        <a className="nav-link" href="#">Events</a>
        <a className="nav-link" href="#">Locations</a>
        <a className="nav-link" href="#">Contact</a>
        <span className="call ">Help Center:  0803 451 8124; 0805 851 9150</span>
      </div>
    </div>
  );
};

export default Navbar;
