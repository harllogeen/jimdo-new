import React, { useEffect } from "react";
import { BlogTitle } from "../../../Component/common/Title";
import Blog7 from "../../../Assets/Img/blog7.webp";
import Blog8 from "../../../Assets/Img/blog8.webp";
import Blog9 from "../../../Assets/Img/blog9.webp";
import Blog10 from "../../../Assets/Img/blog10.webp";
import Business1 from "../../../Assets/Img/business1.webp";
import Business2 from "../../../Assets/Img/business2.webp";
import Business3 from "../../../Assets/Img/business3.webp";
import Business4 from "../../../Assets/Img/business4.webp";
import Business5 from "../../../Assets/Img/business5.png";
import Business6 from "../../../Assets/Img/business6.webp";
import MainFooter from "../../../Component/Footer/MainFooter";
import { SecondaryText } from "../../../Component/common/Text";
import NavbarBlog from "../../../Component/navbar/NavbarBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  const BusinessTips1 = [
    {
      imgUrl: Blog7,
      websiteTips: "Business TIPS",
      description: "9 Best Places to Upload Your Music Online for Free",
    },
  ];
  const BusinessTips2 = [
    {
      imgUrl: Blog8,
      websiteTips: "Business TIPS",
      description: "Music Marketing: Tips and Strategies",
    },
  ];
  const BusinessTips3 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How Do You Charge for Shipping? Let’s See the Options",
    },
  ];
  const BusinessTips4 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How to Make Your Small Business More Sustainable",
    },
  ];

  const BusinessTips5 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How to Create a Slogan for Your Business That Sticks",
    },
  ];

  const BusinessTips6 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "GDPR: What You Should Know and How Jimdo Can Help",
    },
  ];

  const BusinessTips7 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How Do You Charge for Shipping? Let’s See the Options",
    },
  ];

  const BusinessTips8 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How Do You Charge for Shipping? Let’s See the Options",
    },
  ];

  const BusinessTips9 = [
    {
      imgUrl: Blog9,
      websiteTips: "Business TIPS",
      description: "How Do You Charge for Shipping? Let’s See the Options",
    },
  ];

  return (
    <div>
      <NavbarBlog />
      <section className="bg-fcGray7 px-20 py-10  ">
        <div>
          <section>
            <div className="py-10">
              <BlogTitle>BUSINESS TIPS</BlogTitle>

              <div className="flex justify-between items-center">
                <SecondaryText>
                  Marketing and social media, tools and productivity, and
                  information on self-
                  <br />
                  employment, freelancing, and launching your own idea.
                </SecondaryText>
                <div>
                  <p className="text-primary text-sm font-bold underline cursor-pointer">
                    See more
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6  mb-8  ">
              <div className="border-2 border-fcNavy6">
                {BusinessTips1.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog8}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="zoom-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips2.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog9}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips3.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog10}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-2 border-fcNavy6">
                {BusinessTips4.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business1}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips5.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business2}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips6.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business3}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips7.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business4}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips8.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business5}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-2 border-fcNavy6">
                {BusinessTips9.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Business6}
                          alt="business"
                          className="w-full cursor-pointer"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-up">
                        <div className="text-fcGray font-semibold text-xl">
                          {e.websiteTips}
                        </div>
                        <div className="text-2xl text-fcNavy6 font-semibold cursor-pointer hover:text-primary ">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default BusinessTips;
