import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LabelSharpIcon from "@mui/icons-material/LabelSharp";

function ResumeItem({
  title,
  institution,
  date,
  description,
  showButton,
  transcript, // Accept transcript as a prop
}) {
  const [open, setOpen] = useState(false);

  // Functions to handle modal open and close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="resume-item">
      <div className="resume-icon">
        <LabelSharpIcon />
      </div>
      <div className="resume-text">
        <h4>{title}</h4>
        <p>
          {institution} | {date}
        </p>
        <p>{description}</p>
        {showButton && (
          <button className="resume-button" onClick={handleOpen}>
            View Transcript
          </button>
        )}
      </div>

      {/* Modal to display transcript */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transcript-modal-title"
        aria-describedby="transcript-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "#1a1a1a",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "#F3F4F6" }} />
            </IconButton>
          </div>
          <iframe
            src={transcript} // Use the passed transcript prop
            title="Transcript PDF"
            width="100%"
            height="600px"
          />
        </Box>
      </Modal>
    </div>
  );
}

export default ResumeItem;
