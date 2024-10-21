import React from "react";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";
import ResumeItem from "../components/ResumeItem";
import resumeData from "../components/data/resumeData";
import CertificateItem from "../components/CertificateItem";

function resume() {
  const underlineRef = useAnimateUnderline();
  // Split skills into two columns
  const leftSkills = resumeData.skills.slice(
    0,
    Math.ceil(resumeData.skills.length / 2)
  );
  const rightSkills = resumeData.skills.slice(
    Math.ceil(resumeData.skills.length / 2)
  );
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
          {resumeData.education.map((item, index) => (
            <ResumeItem
              key={index}
              title={item.title}
              institution={item.institution}
              date={item.date}
              description={item.description}
              showButton={true}
              transcript={item.transcript}
            />
          ))}
        </div>

        {/* Experience Column */}
        <div className="resume-column experience">
          <h3>Experience</h3>
          {resumeData.experience.map((item, index) => (
            <ResumeItem
              key={index}
              title={item.title}
              institution={item.company}
              date={item.date}
              description={item.description}
              showButton={false}
            />
          ))}
        </div>
      </div>

      {/* Certificate */}
      <h3 className="certifications-title">Certifications</h3>
      <div className="certificates-section">
        {resumeData.certifications.map((cert, index) => (
          <CertificateItem
            key={index}
            title={cert.title}
            issuedBy={cert.issuedBy}
            date={cert.date}
            logo={cert.logo}
            URL={cert.URL}
          />
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {/* Left Column */}
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <div className="skills-bar" key={index}>
                <label>{skill.name}</label>
                <div className="bar">
                  <span style={{ width: `${skill.level}%` }}></span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <div className="skills-bar" key={index}>
                <label>{skill.name}</label>
                <div className="bar">
                  <span style={{ width: `${skill.level}%` }}></span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
