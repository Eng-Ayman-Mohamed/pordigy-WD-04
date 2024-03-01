import React, { Component } from "react";
import img from "../../imgs/My photo.jpg";
import "./Profile.css";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ displayBio: !this.state.displayBio });
    console.log(this.state);
  }
  render() {
    return (
      <div className="profileContainer">
        <img className="profileImg" src={img} alt="" />
        <div className="textContainer">
          <h1>مرحبا</h1>
          <p> إسمي أيمن و أنا مهندس برمجيات</p>

          {this.state.displayBio ? (
            <div>
              <p> احب القراءة و كرة القدم كثيرا</p>
              <p> شيخي المفضل هو الشيخ</p>
              <p> محمد صديق المنشاوي </p>
              <button onClick={this.toggle} className="click_me">
                أخفي{" "}
              </button>
            </div>
          ) : (
            <button onClick={this.toggle} className="click_me">
              أظهر المزيد
            </button>
          )}
        </div>
      </div>
    );
  }
}
