import React from "react";
import Logo from "../../Component/common/Logo";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Formik>
      {(formik) => (
        <div className="flex justify-center items-center mx-auto bg-fcGray8 h-screen ">
          <div className="">
            <Link to="/">
              <div className="flex justify-center py-6">
                <Logo />
              </div>
            </Link>

            <div className="bg-white shadow-lg mb-8  p-8  ">
              <div className="space-y-2">
                <p className="font-bold text-2xl">First, sign up free</p>
                <p className="text-xl">
                  Continue with a free account to start
                  <br /> your website or store. We hate
                  <br /> paperwork too.
                </p>
              </div>
              <div className="space-y-4 my-6 cursor-pointer">
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <FcGoogle />
                  <p>Continue with Google</p>
                </div>
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <FaFacebookSquare className="text-xl text-primary" />
                  <p>Continue with Facebook</p>
                </div>
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <GrApple className="text-xl" />
                  <p>Continue with Apple</p>
                </div>
                <Link to="email" className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <AiOutlineMail className="text-xl" />
                  <p>Continue with Email</p>
                </Link>
              </div>
              <div>
                <p className="text-center">Already Registered?</p>
                <Link to="/login">
                  <button className="bg-transparent border-2 border-primary text-primary w-full px-4 py-3 font-semibold hover:bg-primary hover:text-white my-3  text-sm ">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
