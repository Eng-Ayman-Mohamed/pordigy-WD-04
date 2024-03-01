import React, { Component } from "react";
import Profile from "./components/Profile/Profile";
import Qualification from "./components/Qualification/Qualification";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Title from "./components/title/Title";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="row">
          <Header />
        </div>
        <div className="App">
          <div id="home">
            <div className="temp"></div>
            <div className="row">
              <div>
                <Title />
              </div>
              <div className="col">
                <Profile />
              </div>
              <div
                className="col"
                style={{ display: "grid", alignContent: "center" }}
              >
                <Qualification />
              </div>
            </div>
          </div>
          <div id="about" className="row">
            <About />
          </div>
          <div id="projects" className="row">
            <Projects></Projects>
          </div>
          <div id="contact" className="row">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
