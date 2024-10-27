import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam at rem
            autem totam tenetur possimus quasi perspiciatis qui asperiores hic
            tempore quos velit, optio voluptatibus alias odit aliquam iure
            quibusdam facere reprehenderit quae animi quod pariatur explicabo.
           </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div> 
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-456-789</li>
                <li>contact@tomatto.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Cpyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
