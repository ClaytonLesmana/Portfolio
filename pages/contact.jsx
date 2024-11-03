import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";

function Contact() {
  const underlineRef = useAnimateUnderline();
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a433072f-74c6-4f49-82f7-795a8ea3d879");

    const object = Object.fromEntries(formData);
    console.log(object);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowThankYou(true);
      event.target.reset(); //reset contact form
      setTimeout(() => {
        setShowThankYou(false);
      }, 4000); // Hide message after 4 seconds
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Feel free to contact me anytime</h2>
        <h1>Get in Touch</h1>
        <hr className="animated-underline" ref={underlineRef} />
      </div>

      <div className="contact-content">
        {/* Left - Message Form */}
        <div className="message-form">
          <h3>Message Me</h3>
          {showThankYou && (
            <div className="thank-you-overlay">
              <div className="thank-you-message">
                <h2>Form submitted successfully!</h2>
                <p>
                  Thank you! The form has been submitted successfully.
                  <br />
                  We will reply to you soon!
                </p>
                <a href="#">Go back</a>
              </div>
            </div>
          )}
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit" className="send-button">
              Send Message
            </button>
            {/* {showThankYou && (
            <div className="thank-you-message">
              Thank you for your message! I will get back to you soon.
            </div>
            )} */}
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <div className="contact-title">
            <h3>Contact Info</h3>
            <p>
              Always available for freelance work if the right project comes
              along, feel free to contact me!
            </p>
          </div>
          <br />
          <div className="icons-info-container">
            <div className="icons-contact">
              <BadgeIcon />
              <LocationOnIcon />
              <CallIcon />
              <SendIcon />
            </div>
            <div className="info-contact">
              <div>
                <strong>Name</strong>
                <br /> <span>Clayton Lesmana</span>
              </div>
              <div>
                <strong>Location</strong>
                <br /> <span>Zetland 2017, Sydney NSW</span>
              </div>
              <div>
                <strong>Call Me</strong>
                <br /> <span>0450916106</span>
              </div>
              <div>
                <strong>Email Me</strong>
                <br /> <span>claytonlesmana0808@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
