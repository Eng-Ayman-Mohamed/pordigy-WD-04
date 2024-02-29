import React, { Component } from "react";
import "./Title.css";
const Titles = [
  "a software engineer",
  "a react developer",
  "a fullstack developer",
];

class Title extends Component {
  constructor() {
    super();
    this.state = { titleIndex: 0, fadeIn: true };
  }
  componentDidMount() {
    this.animateTitle();
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitle() {
    this.titleInterval = setInterval(() => {
      if (this.state.titleIndex === 2) {
        this.setState({ titleIndex: 0 });
      } else {
        this.setState({ titleIndex: this.state.titleIndex + 1 });
      }
      this.setState({ fadeIn: true });
      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 1000);
    }, 2000);
  }
  render() {
    return (
      <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
        I'm {Titles[this.state.titleIndex]}
      </p>
    );
  }
}
export default Title;
