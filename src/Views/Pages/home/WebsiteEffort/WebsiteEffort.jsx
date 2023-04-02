import React from "react";
import Title from "../../../../Component/common/Title";
import load from "../../../../Assets/Gif/load.gif"
import MarkIcon from "../../../../Assets/icons/MarkIcon";
import { HiArrowSmallRight } from "react-icons/hi2";

const WebsiteEffort = () => {
  const myEffortArray = [
    {
      icon: <MarkIcon />,
      description: "Make changes any time",
    },
    {
      icon: <MarkIcon />,
      description: "Add your own images and text",
    },
    {
      icon: <MarkIcon />,
      description: "Free image library and photo editing",
    },
    {
      icon: <MarkIcon />,
      description: "Flexible layouts",
    },
    {
      icon: <MarkIcon />,
      description: "Mobile-optimized for all screens",
    },
  ];
  const myEffortArray2 = [
    {
      description: "How to create a website",
      icon: <HiArrowSmallRight />,
    },
  ];
  return (
    <div>
      <section className="bg-fcGray4">
        <div className="text-center py-16">
          <Title>
            <span className="text-primary">Websites</span> without the effort
          </Title>
          <p className="text-xl font-thin pt-4 ">
            Design your website exactly how you want it—we provide everything
            you need to get <br />
            started.
          </p>
        </div>
        <div>
          <div className="flex mx-auto items-center justify-center space-x-20 pt-8 pb-16">
            <div className="">
              <img src={load} alt="load" className="w-96" />
            </div>
            <div>
              <div>
                {myEffortArray.map((e, i) => {
                  return (
                    <div key={i} className="flex items-center space-x-2 ">
                      <div className="">{e.icon}</div>
                      <p className="py-2 text-xl text-fcNavy2 font-semibold">
                        {e.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div>
                {myEffortArray2.map((e, i) => {
                  return (
                    <div key={i} className="flex items-center space-x-2 cursor-pointer">
                      <p className="text-primary underline font-semibold">{e.description}</p>
                      <div className="text-primary font-bold">{e.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteEffort;
