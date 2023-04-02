import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="bg-fcGray4">
      <div className="footer">
        <div className="box-container">
          <div className="box">
            <li to="#/" className="foot">
              Company Website
            </li>
            <li to="#/" className="foot">
              Portfolio Website
            </li>
            <li to="#/" className="foot">
              Restaurant Website
            </li>
            <li to="#/" className="foot">
              Coaching Website
            </li>
            <li to="#/" className="foot">
              Website Builder
            </li>
          </div>

          <div className="box">
            <li to="#/">Local Business Website</li>
            <li to="#/">Photography Website</li>
            <li to="#/"> Wedding Website</li>
            <li to="#/"> Real Estate Website</li>
            <li to="#/">Artist Website</li>
          </div>

          <div className="box">
            <li to="#/"> Freelancer Website</li>
            <li to="#/"> Fitness Website</li>
            <li to="#/"> Vacation Rental Website</li>
            <li to="#/"> Architecture Website</li>
            <li to="#/"> Author Website</li>
          </div>
          <div className="box">
            <li to="#/"> Personal Website</li>
            <li to="#/"> Music & Bands Website</li>
            <li to="#/"> Medical Website</li>
            <li to="#/"> Salon Website</li>
            <li to="#/"> Teacher Website</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
