import React from "react";
import Carousel from "../../../../Component/Carousel/Carousel";
import PrimaryButton from "../../../../Component/common/PrimaryButton";
import Title from "../../../../Component/common/Title";
import { HiArrowSmallRight } from "react-icons/hi2";
import logo_1 from '../../../../Assets/Img/logo_1.png'
import logo_2 from '../../../../Assets/Img/logo_2.png'
import logo_3 from '../../../../Assets/Img/logo_3.png'
import logo_4 from '../../../../Assets/Img/logo_4.png'
import logo_5 from '../../../../Assets/Img/logo_5.png'
import Button from "../../../../Component/common/Button";

const SitesWorth = () => {
  const sellingArray1 = [
    {
      description: "How to create a logo",
      icon: <HiArrowSmallRight />,
    },
  ];
  return (
    <div>
      <div className="bg-fcGray4">
        <div className="text-center pt-16">
          <Title>
            <span className="text-primary">Sites</span> worth seeing
          </Title>
          <p className="text-center py-8 font-thin text-xl ">
            Real people. Real websites. From artists to chefs, freelancers to
            startups, check out what
            <br /> customers have already built with Jimdo.
          </p>
          <PrimaryButton>More Examples</PrimaryButton>
        </div>
        <Carousel />
        <div className="text-center py-20">
          <Title>
            Make it <span className="text-primary">memorable</span> <br /> With
            a free logo
          </Title>
          <p className="text-xl font-thin py-8">
            You're building your brand—now get a logo to match. Use our Logo
            Creator to design your
            <br /> own business logo and download all the files you need for
            digital and print. It's free to
            <br /> use.
          </p>
          <div className="">
            {sellingArray1.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center space-x-2 justify-center cursor-pointer"
                >
                  <p className="text-primary underline font-semibold">
                    {e.description}
                  </p>
                  <div className="text-primary font-bold">{e.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-wrap items-center justify-evenly px-8 pt-10 ">
                <img src={logo_1} alt="logo1 " className=" w-40" />
                <img src={logo_2} alt="logo1" className=" w-40" />
                <img src={logo_3} alt="logo1" className=" w-40" />
                <img src={logo_4} alt="logo1" className=" w-40"/>
                <img src={logo_5} alt="logo1" className=" w-40"  />
          </div>
          <Button className="border-2 border-primary px-10  py-4 text-primary font-semibold mt-10">Try it Free</Button>
        </div>
      </div>
    </div>
  );
};

export default SitesWorth;
