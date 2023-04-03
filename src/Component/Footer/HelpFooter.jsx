import React, { useState } from "react";
import "../../App.css";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { WhiteLogo } from "../common/Logo";

const HelpFooter = () => {
  const [openLanguages, setOpenLanguages] = useState(false);
  return (
    <div>
      <div id="footer " className="bg-fcNavy6 px-20" >
        <div className="box-container ml-4 cursor-pointer">
          <div className="box">
            <div className="text-white py-6">
             <WhiteLogo />
            </div>
            <div className="flex space-x-6 text-2xl mt-4">
              <FaFacebook className="text-white" />
              <FaInstagram  className="text-white" />
              <FaTwitch className="text-white" />
              <FaYoutube className="text-white" />
              <FaTwitter className="text-white" />
            </div>
          </div>

        
        </div>

        <div className="flex px-8 py-16 cursor-pointer text-white items-center">
          <div className="flex justify-between space-x-4 text-xl text-gray-900  w-full ">
            <p>Jimdo Help Center</p>
            <p>Creator Help Center</p>
            <p>Legal Notice </p>
            <p>Terms of Service </p>
            <p>Refund Policy </p>
            <p>Privacy </p>
            <p>Cookie-Policy</p>
            <div>
            <Link
              className="text-xl text-gray-900  hover:text-primary flex items-center gap-2"
              to="/"
              onMouseEnter={() => setOpenLanguages(true)}
              onMouseLeave={() => setOpenLanguages(false)}
            >
              English
              <div className="">
                {openLanguages === false ? (
                  <HiChevronDown className="text-[16px] font-Bold text-white " />
                ) : (
                  <HiChevronUp className="text-[16px] font-Bold text-white " />
                )}
              </div>
            </Link>
          </div>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HelpFooter;
