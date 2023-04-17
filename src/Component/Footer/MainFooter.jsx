import React, { useState } from "react";
import "../../App.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import ScrollToTop from "../Scroll/ScrollToTop";

const MainFooter = () => {
  const [openLanguages, setOpenLanguages] = useState(false);
  return (
    <div>
      <div id="footer" className="relative">
        <div className="box-container ml-4 cursor-pointer">
          <div className="box">
            <div className="">
             <Logo />
            </div>
            <div className="flex space-x-4 text-3xl mt-4">
              <FaFacebook />
              <FaInstagram />
              <FaTwitch />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>

          <div className="box">
            <p>Products</p>
            <li to="#/">Website</li>
            <li to="#/">Online Store</li>
            <li to="#/"> Online Store</li>
            <li to="#/"> Logo</li>
          </div>

          <div className="box">
            <p>About us</p>
            <li to="#/"> About Jimdo</li>
            <li to="#/"> Jobs</li>
            <li to="#/"> Affiliates</li>
          </div>
          <div className="box">
            <p>Service</p>
            <li to="#/"> Jimdo Blog</li>
            <li to="#/"> Inspiration</li>
            <li to="#/"> Help Center</li>
            <li to="#/"> Contact Support</li>
          </div>
        </div>

        <div className="flex justify-between px-8 py-16 cursor-pointer">
          <div className="flex space-x-4 text-sm text-gray-900 font-bold ">
            <p>Legal notice</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Settings </p>
          </div>
          <div>
            <Link
              className="text-sm text-gray-900 font-bold hover:text-primary flex items-center gap-2"
              to="/"
              onMouseEnter={() => setOpenLanguages(true)}
              onMouseLeave={() => setOpenLanguages(false)}
            >
              English
              <div className="">
                {openLanguages === false ? (
                  <HiChevronDown className="text-[16px] font-Bold text-black " />
                ) : (
                  <HiChevronUp className="text-[16px] font-Bold text-black " />
                )}
              </div>
            </Link>
            <div className="fixed bottom-6 right-8 z-50  ">
            <ScrollToTop />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
