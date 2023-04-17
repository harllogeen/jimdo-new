import React, { useState } from "react";
import Logo from "../../../Component/common/Logo";
import Headline from "../../../Assets/Img/HCHeadline.png";
import demo from "../../../Assets/Img/Contact_demo.gif";
import HelpFooter from "../../../Component/Footer/HelpFooter";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

const Contact = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="bg-fcGray8 ">
        <nav className="bg-white shadow-md py-4 cursor-pointer px-20 fixed top-0 w-full z-50">
          <Link to="/helpcenter">
            <Logo />
          </Link>
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
              <form className="flex items-center">
                <button
                  type="submit"
                  className="p-4 cursor-pointer text-sm h-14 font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
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
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
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
              <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Articles in this section
              </h2>
              <ul className="max-w-md cursor-pointer text-gray-500 list-none list-inside dark:text-gray-400 space-y-8">
                <li className="text-fcGray hover:border hover:py-2 ">
                  Guide: Troubleshooting
                </li>
                <li className="text-fcGray hover:border  ">
                  How do I contact
                  <br /> support?
                </li>
                <li className="text-fcGray hover:border hover:py-2  ">
                  Is my website blocked?
                </li>
                <li className="text-fcGray hover:border ">
                  How do I clear my web
                  <br /> browser's cache?
                </li>
                <li className="text-fcGray hover:border ">
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
                <p className="py-8  text-xl">
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
                <div className="text-xl">
                  <p className="pt-4">
                    It's easy as <span className="font-bold">1, 2, 3...</span>
                  </p>
                  <div>
                    <ol className=" space-y-1 text-gray-500 list-decimal py-6  dark:text-gray-400">
                      <li>
                        <Link to="/login" className="text-primary">Log in</Link> to your
                        Jimdo account and{" "}
                        <Link to="/login" className="text-primary">
                          choose the desired website
                        </Link>
                      </li>
                      <li>
                        Open the <span className="font-bold">Need Help?</span>{" "}
                        widget in the{" "}
                        <span className="font-bold">bottom right corner</span>
                      </li>
                      <li>
                        Select your communication channel and{" "}
                        <span className="font-bold">send us a message</span>
                      </li>
                    </ol>
                  </div>
                  <img src={demo} alt="demo" className="w-full" />
                </div>
                <div className="border-2 border-primary border-l-8 p-4 bg-white my-6">
                  <p className="text-xl font-bold">
                    Does your account look different?
                  </p>
                  <p className="text-xl">
                    If your{" "}
                    <span className="text-primary underline hover:no-underline cursor-pointer">
                      Dashboard
                    </span>{" "}
                    does not look the same as the animation above, you are
                    likely
                    <br /> using our <span className="font-bold">
                      Creator
                    </span>{" "}
                    system. Please follow the instructions{" "}
                    <span className="text-primary underline hover:no-underline cursor-pointer">
                      here.
                    </span>
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xl">
                    Our support team will be happy to answer your question and
                    will get back to you as soon
                    <br /> as possible.
                  </p>
                  <h2 className="text-xl font-bold">I cannot log in</h2>
                  <p className="text-xl">
                    Are you having difficulties logging into your Jimdo Account?
                    Please try the below
                    <br /> troubleshooting steps before reaching out to Support:
                  </p>
                  <div className="text-xl ">
                    <ol className="space-y-4 text-gray-500 list-decimal  dark:text-gray-400 pl-8">
                      <li>
                        <span className="font-semibold">Password Reset:</span>
                        <p>
                          First, try resetting your password using the{" "}
                          <span className="text-primary hover:underline cursor-pointer font-semibold">
                            {" "}
                            “Forgot your password?”
                          </span>
                          method.
                          <br /> If you encounter a “Please enter a valid email
                          address” error message, please
                          <br />
                          consider the next troubleshooting steps.{" "}
                        </p>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Other Email Addresses:
                        </span>
                        <p>
                          Consider if there are any other email addresses you
                          may have used to register your
                          <br /> account. If you are unable to reset your
                          password, your account is likely registered
                          <br /> to a different email address (or login method -
                          see <span className="font-semibold">step 3</span>)
                          than the one you
                          <br /> entered.
                        </p>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Other Login Methods:
                        </span>
                        <p>
                          Consider if there are any other login methods (such as
                          with a{" "}
                          <span className="font-semibold">
                            Google, Facebook,
                          </span>
                          <br /> or <span className="font-semibold">Apple</span>{" "}
                          account) that you may have used to register your
                          account.
                        </p>
                      </li>
                    </ol>
                  </div>
                  <p className="text-xl">
                    <span className="font-semibold">
                      Does your account look empty?
                    </span>{" "}
                    If you log into your account and your website is not
                    <br /> listed on the account, it is likely that you have
                    logged into an account using different
                    <br /> login details - meaning a totally different account.
                    Please consider{" "}
                    <span className="font-semibold">step 2 and step 3</span>
                    <br /> noted above.
                  </p>
                  <p className="text-xl">
                    If you are still unable to log in after attempting the above
                    solutions, please use this form
                    <br /> to reach out to{" "}
                    <span className="text-primary cursor-pointer hover:underline">
                      our support team.
                    </span>
                  </p>
                  <p className="font-semibold text-2xl pt-6">
                    I want to report a legal issue
                  </p>
                  <p className="text-xl">
                    Do you wish to report a legal issue with a Jimdo website? If
                    so, you can report that
                    <br /> Jimdo website using the proper form within the{" "}
                    <span className="text-primary font-semibold cursor-pointer hover:underline">
                      Jimdo Legal Help Center.
                    </span>
                  </p>
                  <div>
                    <hr className="text-fcGray4" />
                    <div className="my-10">
                      <p className="text-xl font-semibold text-center">
                        Was this article helpful?
                      </p>
                      <div className="flex justify-center items-center mx-auto space-x-4 my-4">
                        <button className="text-primary font-semibold space-x-2 flex border border-primary  hover:bg-primary items-center px-4 py-1 " onClick={handleClick}  style={{ backgroundColor: active ? "black": "transparent" }}>
                          <HiCheck className="text-primary "  />
                          <p>Yes</p>
                        </button>
                        <button className="text-primary font-semibold space-x-2 flex border border-primary hover:text-white hover:bg-primary items-center px-4 py-1">
                          <HiCheck className="text-primary" />
                          <p>No</p>
                        </button>
                      </div>
                    </div>
                    <hr className="text-fcGray4" />
                  </div>
                  <div className="space-y-4">
                    <p className="font-semibold text-xl">Related articles</p>
                    <ul className=" cursor-pointer  list-none  dark:text-gray-400 space-y-4 text-xl ">
                      <li className="hover:text-primary">
                        How do I cancel my Jimdo subscription?
                      </li>
                      <li className="hover:text-primary">How do I log in?</li>
                      <li className="hover:text-primary">
                        Is my website blocked?
                      </li>
                      <li className="hover:text-primary">
                        How do I transfer my domain to a different provider?
                      </li>
                      <li className="hover:text-primary">
                        How do I forward a domain to my Jimdo website?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <HelpFooter />
      </div>
    </div>
  );
};

export default Contact;
