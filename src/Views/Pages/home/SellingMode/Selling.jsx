import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import MarkIcon from "../../../../Assets/icons/MarkIcon";
import shop from "../../../../Assets/Img/shop.jpg";
import PrimaryButton from "../../../../Component/common/PrimaryButton";

const Selling = () => {
  const sellingArray = [
    {
      icon: <MarkIcon />,
      description: "No transaction fees (your products, your profit)",
    },
    {
      icon: <MarkIcon />,
      description: "Offer shipping and local pickup options",
    },
    {
      icon: <MarkIcon />,
      description: "Book appointments right on your site",
    },
    {
      icon: <MarkIcon />,
      description: "Take payments via PayPal or Stripe",
    },
    {
      icon: <MarkIcon />,
      description: "Manage all your orders in one place",
    },
    {
      icon: <MarkIcon />,
      description: "Sell on Instagram and Facebook",
    },
    {
      icon: <MarkIcon />,
      description: "Boost your store with sales & discounts",
    },
  ];
  const sellingArray2 = [
    {
      description: "How to create an online store",
      icon: <HiArrowSmallRight />,
    },
  ];
  return (
    //selling made simple//
    <div className="bg-white">
      <div className="flex w-[100%]">
        <div className="flex justify-center items-center mx-auto">
          <div className="">
            <p className="text-4xl font-semibold">
              <span className="text-primary">Selling</span> made simple
            </p>
            <p className="text-xl font-thin py-6 ">
              Create an independent online store—hassle-free.
            </p>
            {sellingArray.map((e, i) => {
              return (
                <div key={i} className="flex items-center space-x-2 ">
                  <div className="">{e.icon}</div>
                  <p className="py-2 text-xl text-fcNavy2 font-semibold">
                    {e.description}
                  </p>
                </div>
              );
            })}
            <PrimaryButton>Let's get started</PrimaryButton>
            <div>
              {sellingArray2.map((e, i) => {
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <p className="text-primary underline font-semibold">
                      {e.description}
                    </p>
                    <div className="text-primary font-bold">{e.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[50%] mb-4">
          <img src={shop} alt="shop" className="shopImage" />
        </div>
      </div>
    </div>
  );
};

export default Selling;
