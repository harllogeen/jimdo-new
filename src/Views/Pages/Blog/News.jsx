import React, { useEffect } from "react";
import { BlogTitle } from "../../../Component/common/Title";
import Blog14 from "../../../Assets/Img/blog14.webp";
import Blog15 from "../../../Assets/Img/blog15.webp";
import Blog16 from "../../../Assets/Img/blog16.webp";
import news1 from "../../../Assets/Img/news1.webp";
import news2 from "../../../Assets/Img/news2.webp";
import news3 from "../../../Assets/Img/news3.webp";
import news4 from "../../../Assets/Img/news4.webp";
import news5 from "../../../Assets/Img/news5.webp";
import news6 from "../../../Assets/Img/news6.webp";
import MainFooter from "../../../Component/Footer/MainFooter";
import { SecondaryText } from "../../../Component/common/Text";
import NavbarBlog from "../../../Component/navbar/NavbarBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  const News1 = [
    {
      websiteTips: "News",
      description: "New Jimdo Terms of Service: Shorter, Simpler, Handier",
    },
  ];
  const News2 = [
    {
      websiteTips: "News",
      description:
        "Business Listings Help New Customers Find Your Business Online",
    },
  ];
  const News3 = [
    {
      websiteTips: "News",
      description: "Web Design Features for Beautiful Branding",
    },
  ];

  const News4 = [
    {
      websiteTips: "News",
      description: "Web Design Features for Beautiful Branding",
    },
  ];
  const News5 = [
    {
      websiteTips: "News",
      description: "Your Website Now Does Photo Editing!",
    },
  ];
  const News6 = [
    {
      websiteTips: "News",
      description: "EU VAT 2021: What’s Changed for Online Stores?",
    },
  ];
  const News7 = [
    {
      websiteTips: "News",
      description: "Facebook & Instagram Selling—Now Simplified!",
    },
  ];
  const News8 = [
    {
      websiteTips: "News",
      description: "Our Top Posts of 2020",
    },
  ];
  const News9 = [
    {
      websiteTips: "News",
      description: "Introducing Smart Payment Buttons from PayPal",
    },
  ];

  return (
    <div>
      <NavbarBlog />
      <section className="bg-fcGray7 px-20 py-10  ">
        <div>
          <section>
            <div className="py-10">
              <BlogTitle>NEWS</BlogTitle>

              <div className="flex justify-between items-center">
                <SecondaryText>
                  The latest updates from Jimdo including new features,
                  community
                  <br /> campaigns, and company news.
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
                {News1.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog14} className="w-full cursor-pointer" alt="news" />
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
                {News2.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog15} className="w-full cursor-pointer" alt="news" />
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
                {News3.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog16} className="w-full cursor-pointer" alt="news" />
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
                {News4.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news1}
                         
                          className="w-full cursor-pointer" alt="news"
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
                {News5.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news2}
                         
                          className="w-full cursor-pointer" alt="news"
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
                {News6.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news3}
                         
                          className="w-full cursor-pointer" alt="news"
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
                {News7.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news4}
                         
                          className="w-full cursor-pointer" alt="news"
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
                {News8.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news5}
                         
                          className="w-full cursor-pointer" alt="news"
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
                {News9.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={news6}
                         
                          className="w-full cursor-pointer" alt="news"
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

export default News;
