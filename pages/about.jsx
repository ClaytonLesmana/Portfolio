import React from "react";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";
import profile from "/assets/profile.JPG?url";
// import profile from "../public/assets/profile.JPG";

function About() {
  const underlineRef = useAnimateUnderline();
  const currentYear = new Date().getFullYear();
  const birthYear = 2003;
  const age = currentYear - birthYear;

  return (
    <div className="about-section">
      <div className="about-container">
        {/* Title */}
        <div className="about-title">
          <h2>Get to know me</h2>
          <h1>About Me</h1>
          <hr className="animated-underline" ref={underlineRef} />
        </div>

        <div className="about-content">
          {/* Left Side: Image */}
          <div className="about-image">
            <img src={profile} alt="Profile" className="profile-img" />
          </div>

          {/* Right Side: Info */}
          <div className="about-info">
            <h3>Who am I?</h3>
            <h2>
              I'm Clayton Lesmana, a{" "}
              <span className="highlight-text">Software Engineer</span> and{" "}
              <span className="highlight-text">Fullstack Developer</span>
            </h2>
            <p>
              I am a software engineer with experience in fullstack development.
              I help convert visions into meaningful and useful products. My
              sharp eye for details and passion for innovation drives me to
              iterate fast and deliver projects effectively.
            </p>

            {/* Personal Details */}
            <div className="personal-details">
              <div>
                <p>
                  <strong className="highlight-text">Name : </strong> Clayton
                  Lesmana
                </p>
                <p>
                  <strong className="highlight-text">Age : </strong> {age}
                </p>
              </div>
              <div>
                <p>
                  <strong className="highlight-text">Email : </strong>{" "}
                  claytonlesmana0808@gmail.com
                </p>
                <p>
                  <strong className="highlight-text">From : </strong> Sydney,
                  Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
