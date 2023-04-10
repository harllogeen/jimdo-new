import React, { useState } from "react";
import Logo from "../../../Component/common/Logo";
import { AiOutlineMail } from "react-icons/ai";
import { GrLock } from "react-icons/gr";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../TextField";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Email = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  //checkbox
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  // When the button is clicked
  const btnHandler = () => {};

  const validate = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("An email address is required"),
    password: Yup.string()
      .required("Please enter a password")
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
        <div className="flex justify-center items-center  bg-fcGray8 h-screen ">
          <div className="">
            <Link to="/">
              <div className="flex justify-center py-6">
                <Logo />
              </div>
            </Link>

            <div className="bg-white shadow-2xl mb-8  p-8   ">
              <div className="">
                <p className="font-bold text-2xl">Sign up with email</p>
              </div>

              <Form>
                <div className=" items-center justify-center relative mx-auto my-6 ">
                  <TextField name="email" type="email" placeholder="Email" />
                  <AiOutlineMail className="absolute top-4 left-3 text-xl" />
                </div>

                <div className=" items-center justify-center relative mx-auto my-6 ">
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
                <Fragment>
                  <div className="">
                    <div className="mt-2">
                      <label className="inline-flex ">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          onChange={checkboxHandler}
                        />
                        <span className="ml-2 text-sm">
                          Yes, I’d like to get important tips, news,
                          <br /> and special offers for my website via
                          <br /> email.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-6">
                      <label className="flex">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          onChange={checkboxHandler}
                        />
                        <span className="ml-2 text-sm">
                          The Jimdo{" "}
                          <span className="text-primary cursor-pointer">
                            Terms and Conditions
                          </span>{" "}
                          apply.
                          <br /> The Jimdo{" "}
                          <span className="text-primary cursor-pointer">
                            Privacy Policy
                          </span>{" "}
                          applies.
                        </span>
                      </label>
                    </div>
                  </div>
                </Fragment>
                <Link to="">
                  <button
                    className="bg-primary w-full px-4 py-3 font-semibold hover:bg-fcNavy5  text-yellow-50 mt-8 text-sm "
                    disabled={!agree}
                    onClick={btnHandler}
                  >
                    Create Account
                  </button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Email;
