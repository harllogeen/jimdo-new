import React, { useEffect } from "react";
import bgImage from "../../../Assets/Img/bgImage.jpg";
import Navbar from "../../../Component/navbar/Navbar";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import WebsiteEffort from "./WebsiteEffort/WebsiteEffort";
import CreateWebsite from "./CreateWebsite/CreateWebsite";
import Selling from "./SellingMode/Selling";
import SitesWorth from "./SitesWorth/SitesWorth";
import Indipendent from "./Independent/Indipendent";
import MainFooter from "../../../Component/Footer/MainFooter";
import Footer from "../../../Component/Footer/Footer";
import DayByDayWebsite from "./DayByDayWebsite/DayByDayWebsite";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <>
        <div>
          <div className="bg-secondary h-full">
            <div className="pt-44">
              <div className="flex justify-center space-x-52 items-center"  data-aos="fade-up">
                <div
                  className="text-7xl font-GilroyExtraBold text-fcNavy2"
                  
                  
                >
                  <h1>
                    Everything for
                    <br /> your business
                  </h1>
                </div>
                <div className="">
                  <p className="text-2xl font-thin">
                    Help your customers find you with a home for your
                    <br /> business online. Jimdo has all of the digital tools
                    you
                    <br /> need, including a customized, compliant website, an
                    <br /> online store that's open 24/7, and more.
                  </p>
                  <PrimaryButton>Start Free</PrimaryButton>
                </div>
              </div>
            </div>
            <div className="homeImage">
              <img src={bgImage} alt="BgImage" className="bgimage" />
            </div>
          </div>
        </div>
        <WebsiteEffort />
        <CreateWebsite />
        <Selling />
        <SitesWorth />
        <Indipendent />
        <Footer />
        <DayByDayWebsite />
        <MainFooter />
      </>
    </div>
  );
};

export default Home;
