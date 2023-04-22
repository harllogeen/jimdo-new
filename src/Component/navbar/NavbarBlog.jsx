import React, { useState } from "react";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavbarBlog = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div>
      <div className="px-20 ">
        <div className="bg-white">
          <div className="flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>

            <div className="bg-primary w-80 px-2 py-4  text-white  font-GilroySemiBold  text-xl my-5 text-center hover:border-2 border-fcGray ">
              Try Jimdo Free
            </div>
          </div>
        </div>
        <nav className="relative md:sticky md:top-0 pb-8 flex items-center justify-between bg-white ">
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                to="/blog"
                className={` font-semibold hover:text-primary duration-200 cursor-pointer ${
                  isActive === 0 ? "text-primary" : null
                }`}
                onClick={() => setIsActive(0)}
              >
                Recent Posts
              </Link>
            </li>

            <li>
              <Link
                to="/blog/websiteTips"
                className={` font-semibold hover:text-primary duration-200 cursor-pointer ${
                  isActive === 1 ? "text-primary" : null
                }`}
                onClick={() => setIsActive(1)}
              >
                Website Tips
              </Link>
            </li>
            <li>
              <Link
                to="/blog/businessTips"
                className={` font-semibold hover:text-primary duration-200 cursor-pointer ${
                  isActive === 2 ? "text-primary" : null
                }`}
                onClick={() => setIsActive(2)}
              >
                Business Tips
              </Link>
            </li>
            <li>
              <Link
                to="/blog/inspirations"
                className={` font-semibold hover:text-primary duration-200 cursor-pointer ${
                  isActive === 3 ? "text-primary" : null
                }`}
                onClick={() => setIsActive(3)}
              >
                Inspiration
              </Link>
            </li>

            <li>
              <Link
                to="/blog/news"
                className={` font-semibold hover:text-primary duration-200 cursor-pointer ${
                  isActive === 4 ? "text-primary" : null
                }`}
                onClick={() => setIsActive(4)}
              >
                News
              </Link>
            </li>
          </ul>
          {/* <!-- buttons ---> */}
          <div className="w-3/12 flex justify-end">
            <div class="relative text-gray-600">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <FaSearch />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarBlog;
