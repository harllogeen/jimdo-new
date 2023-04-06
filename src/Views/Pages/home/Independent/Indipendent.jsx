import React, { useEffect } from "react";
import matze from "../../../../Assets/Img/matze.jpg";
import Title from "../../../../Component/common/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const Indipendent = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <section className="w-full ">
        <div className="w-[100%] flex space-x-16 px-10 py-16 ">
          <div className="w-[50%] relative">
            <img
              src={matze}
              alt="matze"
              className="w-full h-full"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
            <div className="text-sm absolute bottom-8 left-8">
              <p className="font-semibold">Matthias Henze</p>
              <p className="font-thin">CEO and founder of Jimdo</p>
            </div>
          </div>
          <div className="w-[50%] items-center grid  justify-center   bg-[#F6F9FA]">
            <div
              className=" "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Title>
                <span className="text-primary font-semibold">Independent</span>{" "}
                but not
                <br /> alone
              </Title>
              <p className="text-xl font-thin text-fcDark pt-6">
                We’re passionate about self-employed small business
                <br /> owners like you. Helping you harness your power and
                <br /> thrive online has been our mission from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indipendent;
