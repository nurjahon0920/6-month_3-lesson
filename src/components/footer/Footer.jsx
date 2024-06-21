import React from "react";
import vk from "../../assets/footer/vk.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import facebook from "../../assets/footer/facebook.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_top">
            <div className="footer_top_right">
              <img src={vk} alt="vk" />
              <img src={linkedin} alt="linkedin" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
