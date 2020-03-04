import React from "react";
import Navbar from "../components/Navbar";
import Location from "../screens/Location";
import About from "./About";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome-note">
      <h2 className="welcome-note-header">
        DEEPER LIFE CAMPUS FELLOWSHIP
      </h2>
      <h4 className="welcome-note-body"> Corper's District (Karu Region) </h4>
      <p className="description">Your Spiritual Welfare .... Our Concern</p>
      <div className="row">
        <div className="search-input">
          <input type="text" />
        </div>
        <button className="search-submit">SEARCH</button>
      </div>
    </div>

    <About />
    <Location />
  </div>
);

export default Home;
