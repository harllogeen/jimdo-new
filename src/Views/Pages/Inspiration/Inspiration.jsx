import React,{useEffect} from "react";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import Title from "../../../Component/common/Title";
import Navbar from "../../../Component/navbar/Navbar";
import insp1 from "../../../Assets/Img/insp1.jpg";
import inspi2 from "../../../Assets/Img/inspi2.png";
import inspi3 from "../../../Assets/Img/inspi3.jpg";
import inspi4 from "../../../Assets/Img/inspi4.jpg";
import inspi5 from "../../../Assets/Img/inspi5.jpg";
import inspi6 from "../../../Assets/Img/inspi6.jpg";
import inspi7 from "../../../Assets/Img/inspi7.jpg";
import inspi8 from "../../../Assets/Img/inspi8.jpg";
import inspi9 from "../../../Assets/Img/inspi9.jpg";
import inspi10 from "../../../Assets/Img/inspi10.jpg";
import inspi11 from "../../../Assets/Img/inspi11.jpg";
import inspi12 from "../../../Assets/Img/inspi12.jpg";
import inspi13 from "../../../Assets/Img/inspi13.jpg";
import inspi14 from "../../../Assets/Img/inspi14.jpg";
import inspi15 from "../../../Assets/Img/inspi15.jpg";
import inspi16 from "../../../Assets/Img/inspi16.jpg";
import inspi17 from "../../../Assets/Img/inspi17.jpg";
import inspi18 from "../../../Assets/Img/inspi18.jpg";
import inspi19 from "../../../Assets/Img/inspi19.jpg";
import inspi20 from "../../../Assets/Img/inspi20.jpg";
import inspi21 from "../../../Assets/Img/inspi21.jpg";
import inspi22 from "../../../Assets/Img/inspi22.jpg";
import inspi23 from "../../../Assets/Img/inspi23.jpg";
import inspi24 from "../../../Assets/Img/inspi24.jpg";
import inspi25 from "../../../Assets/Img/inspi25.jpg";
import inspi26 from "../../../Assets/Img/inspi26.jpg";
import inspi27 from "../../../Assets/Img/inspi27.jpg";
import inspi28 from "../../../Assets/Img/inspi28.jpg";
import inspi29 from "../../../Assets/Img/inspi29.jpg";
import MainFooter from "../../../Component/Footer/MainFooter";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Inspiration = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-center mt-40 " data-aos="fade-up">
        <Title>
          Outstanding Jimdo Website
          <br /> examples. All built with Jimdo.
        </Title>
        <p className="py-8 text-xl text-fcNavy2 font-semibold">Inspiration</p>
        <p className="pb-4 text-xl font-thin text-fcNavy2">
          Small businesses, self-employed, artists, freelancers - Jimdo users
          are the creative minds
          <br /> behind our great websites. Check out examples of Jimdo websites
          from around the world
          <br /> and get inspired for your website.
        </p>
        <Link to="/signup">
          <PrimaryButton>Start Now</PrimaryButton>
        </Link>
      </div>
      <section class="mx-auto w-full gap-12 p-12 grid grid-cols-3 ">
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={insp1} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi2} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi3} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi4} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi5} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi6} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi7} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi8} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi9} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi10} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi11} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi12} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi13} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi14} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi15} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi16} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi17} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi18} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi19} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi20} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi21} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi22} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi23} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi24} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi25} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi26} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi27} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi28} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-fit group">
          <div class="relative overflow-hidden">
            <img class="h-96 w-full object-cover" src={inspi29} alt="inspi" />
            <div class="absolute h-full w-full bg-fcNavy5/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="cursor-pointer text-center">
                <button class="bg-white text-black font-semibold w-60 py-2">
                  Preview
                </button>
                <p className="text-xl text-white pt-2 ">
                  livinggingerdesigns.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
      {/* {projects.map(p => {
      return <img key={p.id} src={p.src} alt="can't show image" />;
    })} */}
    </div>
  );
};

export default Inspiration;
