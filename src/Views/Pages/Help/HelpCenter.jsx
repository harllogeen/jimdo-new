import React from "react";
import Logo from "../../../Component/common/Logo";
import "../../../App.css";

const HelpCenter = () => {
  return (
    <div className="bg-fcGray8 ">
      <nav className="bg-white shadow-md py-4 px-20 fixed top-0 w-full z-50">
        <Logo />
      </nav>
      <div
        className="flex items-center justify-center mt-10  text-center"
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
              class="p-4 text-sm h-14 font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                className="bg-gray-50   text-gray-900 text-sm h-14 focus:ring-blue-500  block w-full pl-4 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                placeholder="Search Jimdo Help Center"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-3 m-20 gap-10 justify-center">
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">First Steps</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">Basics</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">Design</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">My Jimdo</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">My Contract</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">Online Store</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">SEO</p>
          <p className="text-xl ">
            I've just created my website , what should I takecare of first?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">Domain</p>
          <p className="text-xl ">
            What parts make up my Jimdo website? How do I edit it and
            toubleshoot errors?
          </p>
        </div>
        <div className="text-center bg-white space-y-4 p-10">
          <p className="text-3xl font-bold">Email</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
        <div className="text-center bg-white space-y-4  p-10">
          <p className="text-3xl font-bold">Jimdo Finance App</p>
          <p className="text-xl ">
            How do I optimize the design of my Jimdo website?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
