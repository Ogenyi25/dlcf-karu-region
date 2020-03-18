import React from "react";
import Navbar from "../components/Navbar";
import Location from "../screens/Location";
import About from "./About";
import Event from "../screens/Event";
import Sermon from "../screens/Sermon";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome-note">
      <h2 className="welcome-note-header">
        DEEPER LIFE CAMPUS FELLOWSHIP
      </h2>
      <h4 className="welcome-note-body"> Corper's District (Karu Region) </h4>
      <p className="description">Your Spiritual Welfare .... Our Concern</p>
    </div>
    <About />
    <Event />
    <Location />
    <Sermon />
  </div>
);

export default Home;
