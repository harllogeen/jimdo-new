import React, { useState } from "react";
import Logo from "../../Component/common/Logo";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrApple, GrLock } from "react-icons/gr";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const validate = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email address"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .min(8),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        // confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="flex justify-center items-center mx-auto bg-fcGray8 ">
          <div className="">
            <Link to="/">
              <div className="flex justify-center py-6">
                <Logo />
              </div>
            </Link>

            <div className="bg-white shadow-lg mb-8  p-8 ">
              <div className="space-y-2">
                <p className="font-bold text-xl">Welcome back</p>
                <p className="text-xl">
                  You can log in to your Jimdo account <br />
                  here.
                </p>
              </div>
              <div className="space-y-4 my-6 cursor-pointer">
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <FcGoogle />
                  <p>Log in with Google</p>
                </div>
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <FaFacebookSquare className="text-xl text-primary" />
                  <p>Log in with Facebook</p>
                </div>
                <div className="flex items-center justify-center space-x-4 font-bold border-2 border-fcGray4 py-2">
                  <GrApple className="text-xl" />
                  <p>Log in with Apple</p>
                </div>
                <div className="flex  justify-center gap-2 py-4  items-center">
                  <div className="w-full border-b-2 border-fcGray4 "></div>
                  <p className="text-fcGray4 text-sm">OR</p>
                  <div className="w-full border-b-2 border-fcGray4 "></div>
                </div>
              </div>
              <Form>
                <div className=" items-center justify-center relative mx-auto ">
                  <TextField name="email" type="email" placeholder="Email" />
                  <AiOutlineMail className="absolute top-4 left-3 text-xl" />
                </div>

                <div className=" items-center justify-center relative mx-auto ">
                  <TextField
                    name="password"
                    type={open === false ? "password" : "text"}
                    placeholder="Password"
                  />
                  <GrLock className="absolute top-4 left-3 text-xl" />
                  <div className="text-2xl absolute top-4 right-5">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
                <p className="text-xl text-primary hover:underline cursor-pointer">
                  Forget Password?
                </p>
                <Link to="">
                  <button className="bg-primary w-full px-4 py-3 font-semibold hover:bg-fcNavy5  text-yellow-50 mt-8 text-sm ">
                    LOG IN
                  </button>
                </Link>

                <div className="space-y-4 pt-8">
                  <div className="text-fcGray4 border-b-2"></div>
                  <p className="text-xl text-center font-thin ">New here?</p>
                  <Link to="/signup">
                    <button className="bg-transparent border-2 border-primary text-primary w-full px-4 py-3 font-semibold hover:bg-primary hover:text-white my-3  text-sm ">
                      SIGN UP
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
