import React from "react";
import Logo from "../../Component/common/Logo";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-auto bg-fcGray8">
        <div className="">
          <div className="flex justify-center py-6">
            <Logo />
          </div>

          <div className="bg-white w-full px-8">
            <div>
              <p className="font-bold text-xl">Welcome back</p>
              <p className="text-xl">
                You can log in to your Jimdo account <br />
                here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
