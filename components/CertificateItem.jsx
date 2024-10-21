import React from "react";

function CertificateItem({ title, issuedBy, date, logo, URL }) {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="certificate-item">
        <div className="certificate-logo">
          <img src={logo} alt={title} />
        </div>
        <div className="certificate-details">
          <h4>{title}</h4>
          <p>Issued by : {issuedBy}</p>
          <p>{date}</p>
        </div>
      </div>
    </a>
  );
}

export default CertificateItem;
