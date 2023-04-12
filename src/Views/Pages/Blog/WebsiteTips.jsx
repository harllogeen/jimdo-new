import React, { useEffect } from "react";
import { BlogTitle } from "../../../Component/common/Title";
import Blog2 from "../../../Assets/Img/blog2.webp";
import Blog3 from "../../../Assets/Img/blog3.webp";
import Blog4 from "../../../Assets/Img/blog4.webp";
import Blog5 from "../../../Assets/Img/blog5.webp";
import Blog6 from "../../../Assets/Img/blog6.webp";
import Blog7 from "../../../Assets/Img/blog7.webp";
import Website from "../../../Assets/Img/website.webp";
import Website2 from "../../../Assets/Img/website2.webp";
import Website3 from "../../../Assets/Img/website3.webp";
import MainFooter from "../../../Component/Footer/MainFooter";
import { SecondaryText } from "../../../Component/common/Text";
import NavbarBlog from "../../../Component/navbar/NavbarBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const WebsiteTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  const WebsiteTips1 = [
    {
      imgUrl: Blog3,
      websiteTips: "WEBSITE TIPS",
      description: "How to create the perfect online shopping experience",
    },
  ];

  const WebsiteTips2 = [
    {
      imgUrl: Blog3,
      websiteTips: "WEBSITE TIPS",
      description: "Website or Online Store Statistics: How to Check Your Traffic",
    },
  ];
  const WebsiteTips3 = [
    {
      imgUrl: Blog4,
      websiteTips: "WEBSITE TIPS",
      description: "Get a Google Featured Snippet for Your Website",
    },
  ];
  const WebsiteTips4 = [
    {
      imgUrl: Blog5,
      websiteTips: "WEBSITE TIPS",
      description:
        "Beginner’s Guide to Small Business SEO",
    },
  ];

  const WebsiteTips5 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "How to start building customer relationships on your website today",
    },
  ];

  const WebsiteTips6 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "Beginners Guide: What is a Website Domain Name?",
    },
  ];

  const WebsiteTips7 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "How to Find the Best Domain for Your Website",
    },
  ];

  const WebsiteTips8 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "How to Embed a Spotify Playlist on Your Website",
    },
  ];
  const WebsiteTips9 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "How to Get More Bookings Through Your Website",
    },
  ];

  return (
    <div>
      <NavbarBlog />
      <section className="bg-fcGray7 px-20 py-10  ">
        <div>
          <section>
          <div className="py-10">
                <BlogTitle>WEBSITE TIPS</BlogTitle>

                <div className="flex justify-between items-center">
                  <SecondaryText>
                    From design tips to content ideas to SEO—everything you need
                    to know about
                    <br /> your online presence.
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
                {WebsiteTips1.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog2}
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
                {WebsiteTips2.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog3}
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
                {WebsiteTips3.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog4}
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
                {WebsiteTips4.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog5}
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
                {WebsiteTips5.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog6}
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
                {WebsiteTips6.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Blog7}
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
                {WebsiteTips7.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Website}
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
                {WebsiteTips8.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Website2}
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
                {WebsiteTips9.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={Website3}
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

export default WebsiteTips;
