import React, { useState } from "react";

import Navbar from "../../../Component/navbar/Navbar";
import MainFooter from "../../../Component/Footer/MainFooter";
import Website from "./Website";
import OnlineSore from "./OnlineSore";

const Pricing = () => {
  const [switchWebsite, setSwitchWebsite] = useState(false);
  return (
    <div>
      <Navbar />
      <section className="bg-fcGray7 min-h-full ">
        <p className="text-center font-semibold text-5xl pt-32 pb-14">
          Choose the Jimdo plan that’s right for you
        </p>
        <div>
          <div className="flex justify-center items-center cursor-pointer ">
            
            <div
              className="bg-transparent shadow-md px-10 py-3 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[20px] decoration-primary decoration-4 active:underline outline-offset-[20px]  "
              onClick={() => setSwitchWebsite(false)}
            >
              Website
            </div>
            <div
              className="bg-white shadow-md px-10 py-3 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[20px] decoration-primary decoration-4 "
              onClick={() => setSwitchWebsite(true)}
            >
              Online Store
            </div>
          </div>
          {/*price cards */}
        </div>
        {switchWebsite ? <OnlineSore /> : <Website />}
      </section>

      <MainFooter />
    </div>
  );
};

export default Pricing;
