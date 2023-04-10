import React, { useEffect } from "react";
import Button from "../../../Component/common/Button";
import { HiCheck } from "react-icons/hi";
import Data2 from "../Pricing/Table/Data2";
import Question2 from "./Questions/Question2";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import Title from "../../../Component/common/Title";
import imagewebsite from "../../../Assets/Img/imagewebsite.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OnlineSore = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const pricingArray1 = [
    {
      title: "Everything plus:",
      icon: <HiCheck />,
      description: "Unlimited storage",
    },
    {
      icon: <HiCheck />,
      description: "Professional design analysis",
    },
    {
      icon: <HiCheck />,
      description: "Premium support within an hour",
    },
  ];
  const pricingArray2 = [
    {
      title: "All START features, plus:",
      icon: <HiCheck />,
      description: "Search Engine Optimization (SEO)",
    },
    {
      icon: <HiCheck />,
      description: "Visitor statistics",
    },
    {
      icon: <HiCheck />,
      description: "Personalized support within 4 hours",
    },
  ];

  const pricingArray3 = [
    {
      title: "Includes:",
      icon: <HiCheck />,
      description: "All base features",
    },
    {
      icon: <HiCheck />,
      description: ".jimdosite.com subdomain",
    },
  ];
  return (
    <div>
      {/* price card */}
      <div className="">
        <div className="grid grid-cols-3 mx-32 my-16 ">
          <div className="bg-white mt-4">
            <div className="text-center justify-center items-center mx-auto">
              <p className="text-[#010334] font-semibold pt-6 ">VIP</p>
              <p className="text-fcGray2">Your toolbox for success</p>
              <p className="font-bold text-[#010334] pt-6 text-2xl">
                US$<span className="text-4xl">39</span>
              </p>
              <p className="text-fcGray2 text-sm py-2">per month</p>
              <Button className="border-2 border-fcGray4 text-primary px-6 py-2 font-bold">
                Get Started
              </Button>
            </div>
            <div className="py-8">
              {pricingArray1.map((e, i) => {
                return (
                  <div key={i} className="my-2 px-4">
                    <div className="text-[#010334] font-semibold text-sm ">
                      {e.title}
                    </div>
                    <div className="flex items-center text-sm  font-serif ">
                      {e.icon}
                      {e.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white shadow-lg scale-105  ">
            <div className="bg-[#010334] h-8 text-white text-center font-semibold text-[12px] flex items-center justify-center mx-auto my-auto">
              BESTSELLER
            </div>
            <div className="text-center justify-center items-center mx-auto">
              <p className="text-[#010334] font-semibold pt-6 text-sm ">
                BUSINESS
              </p>
              <p className="text-fcGray2 text-sm">For your business website</p>
              <p className="font-bold text-[#010334] pt-6 text-2xl">
                US$<span className="text-4xl">15</span>
              </p>
              <p className="text-fcGray2 text-[12px] py-2">per month</p>
              <Button className="bg-primary text-white px-6 py-2 font-bold text-sm">
                Get Started
              </Button>
            </div>
            <div className="py-8">
              {pricingArray2.map((e, i) => {
                return (
                  <div key={i} className="my-2 px-4 ">
                    <div className="text-[#010334] font-bold text-[12px] ">
                      {e.title}
                    </div>
                    <div className="flex items-center text-[12px]  font-serif ">
                      {e.icon}
                      {e.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white mt-4">
            <div className="text-center justify-center items-center mx-auto">
              <p className="text-[#010334] font-semibold pt-6 ">BASIC</p>
              <p className="text-fcGray2">Your toolbox for success</p>
              <p className="font-bold text-[#010334] pt-6 text-2xl">
                US$<span className="text-4xl">39</span>
              </p>
              <p className="text-fcGray2 text-sm py-2">per month</p>
              <Button className="border-2 border-fcGray4 text-primary px-6 py-2 font-bold">
                Get Started
              </Button>
            </div>
            <div className="py-8">
              {pricingArray3.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="my-2  items-center px-10 justify-center"
                  >
                    <div className="text-[#010334] font-semibold text-sm text-start ">
                      {e.title}
                    </div>
                    <div className="flex items-center text-sm  font-serif ">
                      {e.icon}
                      {e.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section>
          <div className="mx-10 py-10">
            <p className="font-semibold">Included in all premium plans:</p>
            <div className="flex justify-between">
              <div className="flex space-x-4 font-GilroyRegular cursor-pointer ">
                <p className="hover:text-primary">Ad-free</p>
                <p className="hover:text-primary">Connect your own domain</p>
                <p className="hover:text-primary">Connect your email address</p>
                <p className="hover:text-primary">Contact forms</p>
                <p className="hover:text-primary">Image library</p>
                <p className="hover:text-primary">Mobile-optimized</p>
              </div>
              <div className="text-xl font-semibold">Compare all features</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-10 my-10">
        <p className="text-center py-10 text-4xl font-semibold">
          Find the features you need
        </p>
        <Data2 />
        <Data2 />
        <p className="text-fcGray2 text-sm text-center ">Prices include tax</p>
      </div>
      <div className="">
        <Question2 />
        <div className="grid grid-cols-2 items-center justify-center my-32 space-x-6 ">
          <img
            src={imagewebsite}
            alt="imagewebsite"
            data-aos="fade-down"
            data-aos-easing="linear"
          />
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p className="text-4xl font-semibold text-fcNavy3">
              Want to customize your website
              <br /> with code? Try our Creator editor
            </p>
            <p className="py-4">
              Creator's coding features give you the freedom to customize
              <br />
              websites for specific needs. Build your navigation menu, online
              <br />
              store, and design elements—just the way you want them.
            </p>
            <PrimaryButton>Compare Plans</PrimaryButton>
          </div>
        </div>
        <div className="text-center text-fcNavy3">
          <Title data-aos="flip-left" data-aos-easing="ease-out-cubic">
            Thank you for over 32 million Jimdo <br /> websites!
          </Title>
          <p className="text-4xl pt-8  pb-10 " data-aos="zoom-out-up">Made in Nigeria, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineSore;
