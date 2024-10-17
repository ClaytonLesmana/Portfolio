import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";
import Modal from "@mui/material/Modal"; // Using Material UI for modal
import portfolioData from "../components/data/portfolioData";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";
import Card from "../components/Card";

const categories = ["All", "Fullstack", "Backend", "Frontend"];

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

function Portfolio() {
  const underlineRef = useAnimateUnderline();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter the portfolio items based on the active category
  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  // Function to handle the click event for opening the modal
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="portfolio-section">
      <div className="about-title">
        <h2>Showcasing some of my best work</h2>
        <h1>Portfolio</h1>
        <hr className="animated-underline" ref={underlineRef} />
      </div>

      {/* Category Filter Buttons */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items Grid with smooth reshuffling */}
      <motion.div
        className="portfolio-grid"
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth layout shifting
      >
        <AnimatePresence>
          {filteredPortfolio.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition for individual items
            >
              <PortfolioItem
                title={item.title}
                image={item.image}
                onClick={() => handleItemClick(item)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal to display more details about the portfolio item */}
      <Modal
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        aria-labelledby="portfolio-modal-title"
      >
        <div>
          {selectedItem && (
            <>
              <Card />
              {/* <div className="modal-content">
                <h2 id="portfolio-modal-title">{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div> */}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Portfolio;
