import React from "react";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome-note">
      <h2 className="welcome-note-header">
        DEEPER LIFE CAMPUS FELLOWSHIP
      </h2>
      <h4 className="welcome-note-body"> Corper's District (Karu Region) </h4>
      <p className="description">Here to take you on a jolly good ride</p>
      <div className="row">
        <div className="search-input">
          <input type="text" />
        </div>
        <button className="search-submit">SEARCH</button>
      </div>
    </div>
  </div>
);

export default Home;
