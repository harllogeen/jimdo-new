import React from "react";
import Logo from "../../../Component/common/Logo";
import Headline from "../../../Assets/Img/HCHeadline.png";
import demo from "../../../Assets/Img/Contact_demo.gif";

const Contact = () => {
  return (
    <div>
      <div className="bg-fcGray8 ">
        <nav className="bg-white shadow-md py-4 cursor-pointer px-20 fixed top-0 w-full z-50">
          <Logo />
        </nav>
        <div className="p-20  ">
          <div className="flex justify-between items-center mt-6">
            <div className=" flex space-x-4 cursor-pointer">
              <p className=" text-primary hover:underline">
                Jimdo Help Center<span className="text-black"> {">"} </span>
              </p>
              <p className=" text-primary  hover:underline ">
                Basics<span className="text-black"> {">"}</span>
              </p>
              <p className=" text-primary  hover:underline">
                Troubleshooting<span className="text-black"> {">"}</span>
              </p>
            </div>
            <div>
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
          <div className="flex  gap-4">
            <div>
              <h2 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Articles in this section
              </h2>
              <ul class="max-w-md cursor-pointer text-gray-500 list-none list-inside dark:text-gray-400 space-y-8">
                <li className="text-fcGray hover:border border-fcGray  ">
                  Guide: Troubleshooting
                </li>
                <li className="text-fcGray hover:border border-fcGray ">
                  How do I contact
                  <br /> support?
                </li>
                <li className="text-fcGray hover:border border-fcGray w-60 items-center ">
                  Is my website blocked?
                </li>
                <li className="text-fcGray hover:border border-fcGray ">
                  How do I clear my web
                  <br /> browser's cache?
                </li>
                <li className="text-fcGray hover:border border-fcGray ">
                  What are the system
                  <br /> requirements?
                </li>
              </ul>
            </div>
            <div>
              <div>
                <p className="font-bold text-3xl mt-6">
                  How do I contact support?
                </p>
                <p className="py-8 font-GilroyMedium text-xl">
                  You’ll find answers for the most frequently asked questions
                  within our Jimdo Help
                  <br /> Center. Take a look around and see if you can find the
                  answer to your question. If
                  <br /> you can’t find the right answer, please follow the
                  steps below to find a solution to
                  <br /> your problem.
                </p>
                <div className="w-full cursor-pointer">
                  <img src={Headline} alt="headline" />
                </div>
                <div>
                  <p className="pt-4">
                    It's easy as <span className="font-bold">1, 2, 3...</span>
                  </p>
                  <div>
                    <ol class="max-w-md space-y-1 text-gray-500 list-decimal py-6  dark:text-gray-400">
                      <li>
                       <span className="text-primary">Log in</span>  to your Jimdo account and <span className="text-primary">choose the desired website</span>
                      </li>
                      <li>
                        Open the <span className="font-bold">Need Help?</span> widget in the <span className="font-bold">bottom right corner</span>
                      </li>
                      <li>
                        Select your communication channel and <span className="font-bold">send us a message</span>
                      </li>
                    </ol>
                  </div>
                  <img src={demo} alt="demo" className="w-full" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
