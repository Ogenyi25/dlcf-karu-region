import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      <div className="float-right col-md-9 container-fluid">
        <nav className="nav">
          <Link to='/sermon'className="nav-link" >Sermons</Link>
          <Link to='/event'className="nav-link" >Events</Link>
          <Link to='/location'className="nav-link" >Locations</Link>
          <Link to='/contact'className="nav-link" >Contact</Link>
        </nav>
        <span className="call ">Help Center:  0803 451 8124; 0805 851 9150</span>
      </div>
    </div>
  );
};

export default Navbar;
