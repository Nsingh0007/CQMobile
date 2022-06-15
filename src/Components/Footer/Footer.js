import React from "react";
import { Link } from "react-router-dom";
import { SVG } from "../../assets/icons/icons-png";
import Container from "../CommonContainer/CommonContainer";
import "./Footer.css";
function Footer() {
  return (
    <Container inner="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <img src={SVG.CHEQ_FOOTER} />
          <p>
            Vaishnavi Summit, Ground Floor, 7th Main, 80 FeetRoad, 3rd Block,
            Koramangala Industrial Layout, Bangalore, INDIA 560034
          </p>
          <div className="mail-container">
            <span>
              <img src={SVG.MAIL_ICON} className="icon" />
            </span>
            help@cheq.one
          </div>
        </div>
        <div className="footer-right">
          <p>Quick Menu</p>
          <ul>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Team</Link>
            </li>
            <li>
              <Link to="#">Investor</Link>
            </li>
            <li>
              <Link to="#">Contact US</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Made with <span>❤️</span> India</div>
        <p className="cheq-copyright">All Copyrights @Cheq</p>
      </div>
    </Container>
  );
}

export default Footer;
