import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Sanjana Shriram</div>
            <div className="brief_description">
              Rising junior @ Carnegie Mellon University majoring in ECE. 
              Full stack software engineer with experience and interest in autnomous systems, web application development, robotics, and machine learning.
            </div>
          </div>
        </div>
      </div>

    )
  }
}