import React, { useEffect } from "react";
import { BigTitle, BlogTitle } from "../../../Component/common/Title";
import newImg from "../../../Assets/Img/blog1.webp";
import Blog2 from "../../../Assets/Img/blog2.webp";
import Blog3 from "../../../Assets/Img/blog3.webp";
import Blog4 from "../../../Assets/Img/blog4.webp";
import Blog5 from "../../../Assets/Img/blog5.webp";
import Blog6 from "../../../Assets/Img/blog6.webp";
import Blog7 from "../../../Assets/Img/blog7.webp";
import Blog8 from "../../../Assets/Img/blog8.webp";
import Blog9 from "../../../Assets/Img/blog9.webp";
import Blog10 from "../../../Assets/Img/blog10.webp";
import Blog11 from "../../../Assets/Img/blog11.webp";
import Blog12 from "../../../Assets/Img/blog12.webp";
import Blog13 from "../../../Assets/Img/blog13.webp";
import Blog14 from "../../../Assets/Img/blog14.webp";
import Blog15 from "../../../Assets/Img/blog15.webp";
import Blog16 from "../../../Assets/Img/blog16.webp";
import MainFooter from "../../../Component/Footer/MainFooter";
import { SecondaryText } from "../../../Component/common/Text";
import NavbarBlog from "../../../Component/navbar/NavbarBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const Blog1 = [
    {
      imgUrl: Blog2,
      websiteTips: "WEBSITE TIPS",
      description: "How to create the perfect online shopping experience",
    },
  ];

  const website = [
    {
      imgUrl: Blog3,
      websiteTips: "WEBSITE TIPS",
      description:
        "Website or Online Store Statistics: How to Check Your Traffic",
    },
  ];

  const websiteTips = [
    {
      imgUrl: Blog3,
      websiteTips: "WEBSITE TIPS",
      description: "Get a Google Featured Snippet for Your Website",
    },
  ];
  const websiteTips1 = [
    {
      imgUrl: Blog4,
      websiteTips: "WEBSITE TIPS",
      description: "Beginner’s Guide to Small Business SEO",
    },
  ];
  const websiteTips2 = [
    {
      imgUrl: Blog5,
      websiteTips: "WEBSITE TIPS",
      description:
        "How to start building customer relationships on your website today",
    },
  ];

  const websiteTips3 = [
    {
      imgUrl: Blog6,
      websiteTips: "WEBSITE TIPS",
      description: "Beginners Guide: What is a Website Domain Name?",
    },
  ];

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
  const Inspiration1 = [
    {
      imgUrl: Blog10,
      websiteTips: "Inspiration",
      description: "7 Photography Websites with the Wow Factor",
    },
  ];

  const Inspiration2 = [
    {
      imgUrl: Blog11,
      websiteTips: "Inspiration",
      description:
        "Dancer’s online store leads to success: “Every sale is like a dopamine rush!”",
    },
  ];

  const Inspiration3 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "Meet Amanda: Product manager and coffee entrepreneur at Los Altona",
    },
  ];
  const News1 = [
    {
      imgUrl: Blog13,
      websiteTips: "News",
      description: "New Jimdo Terms of Service: Shorter, Simpler, Handier",
    },
  ];
  const News2 = [
    {
      imgUrl: Blog14,
      websiteTips: "News",
      description:
        "Business Listings Help New Customers Find Your Business Online",
    },
  ];
  const News3 = [
    {
      imgUrl: Blog15,
      websiteTips: "News",
      description: "Web Design Features for Beautiful Branding",
    },
  ];

  return (
    <div>
      <div>
        <NavbarBlog />
        <section className="bg-fcGray7 px-20 py-10  ">
          <div>
            <div className="pt-8">
              <BigTitle
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                THE JIMDO BLOG
              </BigTitle>
              <p
                className="text-6xl font-extrabold text-primary "
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                FOR SMALL BUSINESSES
              </p>
              <p className="font-GilroyRegular text-2xl text-fcNavy6 py-8">
                Get advice about self-employment, starting a business, website
                <br />
                tips, web design, online stores, SEO, marketing, and more.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 cursor-pointer  border-2 items-center group border-fcNavy6 w-[100%]  ">
              <div className="relative overflow-hidden bg-cover bg-no-repeat ">
                <img src={newImg} alt="blog1" />
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
              </div>
              <div className=" cursor-pointer text-fcNavy6">
                <p className="text-fcGray font-semibold   ">NEWS</p>
                <p
                  className=" text-4xl font-semibold  justify-center hover:text-primary"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                >
                  Smart Apps: Do Even More
                  <br /> with Your Website!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-10 mt-10 ">
              <div className="border-2 border-fcNavy6">
                {Blog1.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog2} className="w-full cursor-pointer" />
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
                {website.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog3} className="w-full cursor-pointer" />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                      </div>
                      <div className="px-10 space-y-2 py-14" data-aos="fade-left">
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
                {websiteTips.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={Blog4} className="w-full cursor-pointer" />
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
              <div className="grid grid-cols-3 space-x-10  ">
                <div className="border-2 border-fcNavy6">
                  {websiteTips1.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog5} className="w-full cursor-pointer" />
                          <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                        </div>
                        <div className="px-10 space-y-2 py-14" data-aos="fade-right">
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
                  {websiteTips2.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog6} className="w-full cursor-pointer" />
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
                  {websiteTips3.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog7} className="w-full cursor-pointer" />
                          <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
                        </div>
                        <div className="px-10 space-y-2 py-14" data-aos="fade-right">
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
              <div className="grid grid-cols-3 space-x-10  ">
                <div className="border-2 border-fcNavy6">
                  {BusinessTips1.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog8} className="w-full cursor-pointer" />
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
                  {BusinessTips2.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog9} className="w-full cursor-pointer" />
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
                          <img src={Blog10} className="w-full cursor-pointer" />
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
            <section>
              <div className="py-10">
                <BlogTitle>INSPIRATION</BlogTitle>

                <div className="flex justify-between items-center">
                  <SecondaryText>
                    Real companies, real stories. Get fresh ideas from Jimdo
                    users already
                    <br /> making their mark.
                  </SecondaryText>
                  <div>
                    <p className="text-primary text-sm font-bold underline cursor-pointer">
                      See more
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 space-x-10  ">
                <div className="border-2 border-fcNavy6">
                  {Inspiration1.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog11} className="w-full cursor-pointer" />
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
                  {Inspiration2.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog12} className="w-full cursor-pointer" />
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
                  {Inspiration3.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog13} className="w-full cursor-pointer" />
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
              <div className="grid grid-cols-3 space-x-10  ">
                <div className="border-2 border-fcNavy6">
                  {News1.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog14} className="w-full cursor-pointer" />
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
                          <img src={Blog15} className="w-full cursor-pointer" />
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
                          <img src={Blog16} className="w-full cursor-pointer" />
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
    </div>
  );
};

export default Blog;
