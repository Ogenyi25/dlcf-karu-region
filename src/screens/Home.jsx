import React from "react";
import Navbar from "../components/Navbar";
import About from "../screens/About";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome-note">
      <h2 className="welcome-note-header">
        DEEPER LIFE CAMPUS FELLOWSHIP
      </h2>
      <div className="overlay"></div>
      <h4 className="welcome-note-body"> Corper's District (Karu Region) </h4>
      <p className="description">Your Spiritual Welfare .... Our Concern</p>
    </div>
    <About />
  </div>
);

export default Home;
