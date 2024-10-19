import * as React from "react";
import { Modal, Box } from "@mui/material";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Carousels from "../components/Carousels";

export default function PortfolioModal({
  open,
  onClose,
  selectedItem,
  portfolioData,
  setSelectedItem,
}) {
  const underlineRef = useAnimateUnderline();
  if (!selectedItem) return null;
  // Function to navigate to the previous portfolio item
  const handlePrevious = () => {
    const currentIndex = portfolioData.findIndex(
      (item) => item.id === selectedItem.id
    );
    const previousIndex =
      (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    setSelectedItem(portfolioData[previousIndex]);
  };

  // Function to navigate to the next portfolio item
  const handleNext = () => {
    const currentIndex = portfolioData.findIndex(
      (item) => item.id === selectedItem.id
    );
    const nextIndex = (currentIndex + 1) % portfolioData.length;
    setSelectedItem(portfolioData[nextIndex]);
    console.log("portfolioData", portfolioData);
    console.log("selectedItem", selectedItem);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="portfolio-modal-title"
    >
      <Box
        className="modal-content"
        sx={{ backgroundColor: "#1a1a1a", color: "#fff", borderRadius: 2 }}
      >
        <div className="modal-container">
          {/* Modal Header - First Row */}
          <div className="modal-header">
            <div className="modal-title">
              <h2 id="portfolio-modal-title">{selectedItem.title}</h2>
              <hr className="animated-underline" ref={underlineRef} />
            </div>
            <CloseIcon onClick={onClose} className="close-button" />
          </div>

          {/* Second Row - Media and Details Sections */}
          <div className="modal-main-content">
            {/* Left Arrow */}
            <button className="arrow-button left" onClick={handlePrevious}>
              <ArrowBackIosIcon fontSize="large" />
            </button>
            {/* &lt; */}
            {/* Left Side: Image and Video */}
            <div className="media-section">
              <div className="image-carousel">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="modal-image"
                />
              </div>
              <iframe
                className="project-video"
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="Project Video"
              ></iframe>
            </div>

            {/* Right Side: Project Details */}
            <div className="details-section">
              <div className="modal-body">
                <div className="modal-description">
                  <h3>Project Info</h3>
                  <hr className="animated-underline-modal-info" />
                  <p>{selectedItem.description}</p>
                </div>

                <div className="modal-details">
                  <h3>Project Details</h3>
                  <hr className="animated-underline-modal-detail" />
                  <p className="project-details">
                    <strong>Category : </strong> {selectedItem.category}
                  </p>
                  <p className="project-details">
                    <strong>URL : </strong> {selectedItem.URL}
                  </p>
                  <p className="project-details">
                    <strong>Github : </strong> {selectedItem.github}
                  </p>
                  <p>
                    <strong className="tech-details">Technologies :</strong>
                    <div className="tech-tags">
                      {selectedItem.technologies?.length > 0
                        ? selectedItem.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))
                        : "Not Available"}
                    </div>
                  </p>
                </div>

                <div className="modal-share">
                  {/* <h3>Share</h3> */}
                  <div className="social-icons">
                    <a href="#">
                      <InstagramIcon />
                    </a>
                    <a href="#">
                      <GitHubIcon />
                    </a>
                    <a href="#">
                      <LinkedInIcon />
                    </a>
                    <a href="#">
                      <FacebookIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Arrow */}
            <button className="arrow-button right" onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
            {/* &gt; */}
          </div>
        </div>
      </Box>
    </Modal>
  );
}
