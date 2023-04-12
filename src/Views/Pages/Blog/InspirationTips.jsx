import React, { useEffect } from "react";
import { BlogTitle } from "../../../Component/common/Title";
import Blog12 from "../../../Assets/Img/blog12.webp";
import Blog13 from "../../../Assets/Img/blog13.webp";
import Blog11 from "../../../Assets/Img/blog11.webp";
import Blog10 from "../../../Assets/Img/blog10.webp";
import inspiration1 from "../../../Assets/Img/inspiration1.webp";
import inspiration2 from "../../../Assets/Img/inspiration2.webp";
import inspiration3 from "../../../Assets/Img/inspiration3.webp";
import inspiration4 from "../../../Assets/Img/inspiration4.webp";
import inspiration5 from "../../../Assets/Img/inspiration5.webp";
import inspiration6 from "../../../Assets/Img/inspiration6.webp";
import MainFooter from "../../../Component/Footer/MainFooter";
import { SecondaryText } from "../../../Component/common/Text";
import NavbarBlog from "../../../Component/navbar/NavbarBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const InspirationTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
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
  const Inspiration4 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "Meet Maxim: Community supporter and beekeeper in Hamburg",
    },
  ];
  const Inspiration5 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "Meet Thora: Project manager and bracelet designer at Tampen Kiel",
    },
  ];
  const Inspiration6 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "“I wanted to dedicate my energy to a project with meaning”",
    },
  ];
  const Inspiration7 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "The self-employment lucky dip: Not every day is everyday",
    },
  ];
  const Inspiration8 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "10 Inspiring Small Business Stories from Creative Minds",
    },
  ];
  const Inspiration9 = [
    {
      imgUrl: Blog12,
      websiteTips: "Inspiration",
      description:
        "A Queer Podcast Opens up New Conversations: Stadt.Land.Schwul",
    },
  ];

  return (
    <div>
      <NavbarBlog />
      <section className="bg-fcGray7 px-20 py-10  ">
        <div>
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
            <div className="grid grid-cols-3 gap-6  mb-8  ">
            <div className="border-2 border-fcNavy6">
                  {Inspiration1.map((e, i) => {
                    return (
                      <div key={i} className=" space-x-2">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img src={Blog11} className="w-full cursor-pointer" alt="inspiration" />
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
                          <img src={Blog12} className="w-full cursor-pointer" alt="inspiration" />
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
                          <img src={Blog13} className="w-full cursor-pointer" alt="inspiration" />
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
                {Inspiration4.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration1}
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
                {Inspiration5.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration2}
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
                {Inspiration6.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration3}
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
                {Inspiration7.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration4}
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
                {Inspiration8.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration5}
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
                {Inspiration9.map((e, i) => {
                  return (
                    <div key={i} className=" space-x-2">
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          src={inspiration6}
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

export default InspirationTips;
