import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="author">Alba Vidal</p>
      <a
        className="link"
        href="mailto:albavidalm@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/albavidalm/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="link"
        href="https://github.com/albavidalm"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
