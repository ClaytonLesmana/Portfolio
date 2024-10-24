import React, { useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a Software Engineer";

  // Typing effect logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval); // Stop when the entire text is typed
      }
    }, 100); // Adjust speed of typing here (100ms per letter)

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="home-section">
      <ParticlesBackground />
      <div className="left-content">
        <h1>
          Welcome to my site! <br />
          {/* Reserve space for the full text */}
          <span className="typing-text">{typedText}</span>
        </h1>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/clayton_lesmana/profilecard/?igsh=MTU3NnR5aHA4cWVlMg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/ClaytonLesmana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/clayton-lesmana-40b56524b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.facebook.com/clayton.lesmana.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
        {/* <button
          href="../public/Clayton_Software_Engineer.pdf"
          download
          className="download-button"
        >
          Download CV
        </button> */}
        <a
          href="../public/Clayton_Software_Engineer.pdf"
          download
          className="download-button"
        >
          Download CV
        </a>
      </div>
      <div className="arrow-container">
        <a href="#about">
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: "4rem", // Increase size
              color: "#34d399", // Set arrow color
              animation: "bounce 2s infinite", // Apply bounce animation
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
