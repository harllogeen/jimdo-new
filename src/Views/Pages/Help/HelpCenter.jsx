import React, {useEffect} from "react";
import Logo from "../../../Component/common/Logo";
import "../../../App.css";
import HelpFooter from "../../../Component/Footer/HelpFooter";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HelpCenter = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-fcGray8 ">
      <nav className="bg-white shadow-md py-4 cursor-pointer px-20 fixed top-0 w-full z-50">
        <Link to="/">
          <Logo />
        </Link>
      </nav>
      <div
        className="flex items-center justify-center mt-10   text-center"
        id="helpcenter"
      >
        <div>
          <p className="text-white text-2xl font-bold pb-6 ">
            Do you have questions about the
            <br /> Jimdo website builder?
            <br /> We can help you!
          </p>

          <form class="flex items-center">
            <button
              type="submit"
              class="p-4 cursor-pointer text-sm h-14 font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50   text-gray-900 text-sm h-14 focus:ring-blue-500  block w-full pl-4 cursor-pointer p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                placeholder="Search Jimdo Help Center"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-3 m-20 gap-10 justify-center bg-fcGray8 ">
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-down"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">First Steps</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary">
          <p className="text-3xl font-bold">Basics</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-down"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">Design</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-up"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">My Jimdo</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-down"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">My Contract</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-up"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">Online Store</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-down"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">SEO</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-left"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">Domain</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer p-10 hover:text-primary"  data-aos="fade-up"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">Email</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 cursor-pointer hover:text-primary  p-10"  data-aos="fade-right"
            data-aos-easing="linear">
          <p className="text-3xl font-bold">Jimdo Finance App</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
      </div>
      <div className="p-20 bg-white">
        <div>
          <p className="font-bold text-xl">Promoted articles</p>
          <div className="grid grid-cols-3 gap-6 my-6 ">
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                How do I publish my Jimdo website?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                Guide: Troubleshooting
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                How do I contact support?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                How do I edit images on my Jimdo
                <br /> website?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                Where can I get information on the Jimdo
                <br /> Affiliate Program?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                <br />
                How do I cancel my Jimdo subscription?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                How do I add products to my Jimdo
                <br /> store?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                What SEO options does the Jimdo
                <br /> website builder offer?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                <br />
                Guide: Transfer a domain to Jimdo
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
            <div className="space-y-4 cursor-pointer">
              <p className="font-GilroyRegular text-xl hover:text-primary ">
                How do I connect my Jimdo domain to
                <br /> Google Workspace (formerly known as G<br /> Suite)?
              </p>
              <hr className="w-full text-fcGray8 " />
            </div>
          </div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
};

export default HelpCenter;
