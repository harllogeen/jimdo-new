import React, { useState } from "react";
import Navbar from "../../../Component/navbar/Navbar";
import MainFooter from "../../../Component/Footer/MainFooter";
import Website from "./Website";
import OnlineSore from "./OnlineSore";

const Pricing = () => {
  const [switchWebsite, setSwitchWebsite] = useState(true);
  
  
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
              className={`shadow-md px-10 py-3 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[20px] decoration-primary decoration-4 active:underline outline-offset-[20px] ${switchWebsite ? "bg-white shadow-lg ":"bg-transparent"}`}
              onClick={() => setSwitchWebsite(true)}
            >
              Website
            </div>
            <div
              className={`shadow-md px-10 py-3 text-primary font-bold hover:underline font-GilroySemiBold underline-offset-[20px] decoration-primary decoration-4 ${switchWebsite ? "bg-transparent":"bg-white"}`}
              onClick={() => setSwitchWebsite(false)}
            >
              Online Store
            </div>
          </div>
          {/*price cards */}
        </div>
        {switchWebsite ? <Website />: <OnlineSore />}
      </section>

      <MainFooter />
    </div>
  );
};

export default Pricing;
