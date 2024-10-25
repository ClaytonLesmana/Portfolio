import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import { useAnimateUnderline } from "../components/hook/ useAnimateUnderline";

function contact() {
  const underlineRef = useAnimateUnderline();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a433072f-74c6-4f49-82f7-795a8ea3d879");

    const object = Object.fromEntries(formData);
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
        <form onSubmit={onSubmit}>
          {/* Left - Message Form */}
          <div className="message-form">
            <h3>Message Me</h3>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          </div>
        </form>

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

export default contact;
