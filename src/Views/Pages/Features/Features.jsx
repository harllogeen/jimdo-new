import React, { useState } from "react";
import Navbar from "../../../Component/navbar/Navbar";
import Hero from "../../../Assets/Img/hero.jpg";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import FeatureWebsites from "./FeatureWebsites";
import FeatureOnlineStore from "./FeatureOnlineStore";

const Features = () => {
  const [switchFeatureWebsites, setSwitchFeatureWebsites] = useState(true);
  return (
    <div>
      <div>
        <Navbar />
        <section className="pt-16">
          <div className="grid grid-cols-2 bg-fcGray7 ">
            <div className="mx-auto  justify-center items-center text-fcNavy6 pt-10">
              <p className="text-8xl font-bold ">
                Going
                <br /> Professional.
                <br />
                <span className="text-primary">
                  Made
                  <br /> Practical.
                </span>
              </p>
              <p className="text-xl font-thin py-4  ">
                Get your own domain, more pages, and fast support from the
                <br /> people who speak self-employed. All from $9/month.
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
              <div>
                <div className="flex justify-center items-center cursor-pointer mt-8 ">
                  <div
                    className={`text-center shadow-md w-48 py-2 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[10px] decoration-primary decoration-4 active:underline outline-offset-[20px] ${
                      switchFeatureWebsites
                        ? "bg-white shadow-lg "
                        : "bg-trnasparent border border-primary"
                    }`}
                    onClick={() => setSwitchFeatureWebsites(true)}
                  >
                    Website
                  </div>
                  <div
                    className={`text-center shadow-md w-48 py-2 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[10px] decoration-primary decoration-4 active:underline outline-offset-[20px] ${
                      switchFeatureWebsites
                        ? "bg-transparent border border-primary"
                        : "bg-white shadow-lg "
                    }`}
                    onClick={() => setSwitchFeatureWebsites(false)}
                  >
                    Online Store
                  </div>
                </div>
                {/*price cards */}
              </div>
            </div>
            <div>
              <img src={Hero} alt="hero" className="" />
            </div>
          </div>
        </section>
        <section>
          {switchFeatureWebsites ? <FeatureWebsites /> : <FeatureOnlineStore />}
        </section>
      </div>
    </div>
  );
};

export default Features;
