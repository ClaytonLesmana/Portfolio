import React from "react";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";

function resume() {
  const underlineRef = useAnimateUnderline();
  return (
    <div className="resume-section">
      <div className="resume-header">
        <h2>Check out my Resume</h2>
        <h1>Resume</h1>
        <hr className="animated-underline" ref={underlineRef} />
      </div>

      <div className="resume-content">
        {/* Education Column */}
        <div className="resume-column education">
          <h3>Education</h3>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>Computer Science</h4>
            <p>Cambridge University | 2004 - 2007</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>Bachelor Degree</h4>
            <p>University of Tokyo | 2008 - 2010</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>Master Degree</h4>
            <p>Harvard University | 2012 - 2015</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Experience Column */}
        <div className="resume-column experience">
          <h3>Experience</h3>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>Software Engineer</h4>
            <p>Adobe | 2015 - 2017</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>Back-End Developer</h4>
            <p>Google | 2017 - 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="resume-item">
            <div className="resume-icon"></div>
            <h4>UI/UX Designer</h4>
            <p>Discord | 2019 - Present</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>My Skills</h3>
        <div className="skills-bar">
          <label>HTML/CSS</label>
          <div className="bar">
            <span style={{ width: "95%" }}></span>
          </div>
        </div>
        <div className="skills-bar">
          <label>Web Design</label>
          <div className="bar">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="skills-bar">
          <label>JavaScript</label>
          <div className="bar">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="skills-bar">
          <label>React JS</label>
          <div className="bar">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="skills-bar">
          <label>Express.js</label>
          <div className="bar">
            <span style={{ width: "95%" }}></span>
          </div>
        </div>
        <div className="skills-bar">
          <label>TypeScript</label>
          <div className="bar">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
