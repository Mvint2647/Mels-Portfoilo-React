import React from "react";
import "./footer.css";
import IconLN from "../../src/images/linkdin.png";
import IconGH from "../../src/images/gthub.png";
import IconBH from "../../src/images/bh.png";

function Footer() {
  return (
    
      <footer className="header">
        <a href="https://www.linkedin.com/in/melissa-v-769255105/">
          <img id="social" src={IconLN} alt="linkdin" />
        </a>

        <a href="https://github.com/Mvint2647">
          <img id="social" src={IconGH} alt="linkdin" />
        </a>

        <a href="https://www.behance.net/Melissasta10d9">
          <img id="social" src={IconBH} alt="linkdin" />
        </a>


      </footer>
    
  );
}

export default Footer;
