import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-black">
        <Header />
      </div>
      <div className="absolute right-1/3 top-1/3 left-1/3 ">
        <h1 className=" text-white text-5xl font-bold  text-center ">
          Unlimited movies, TV shows and more
        </h1>
        <h1 className=" text-white text-xl font-semibold text-center m-5 ">
          Starts at ₹149. Cancel anytime.
        </h1>
        <h1 className=" text-white text-sm font-semibold  m-5 ">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <form className="bg-opacity-80">
          <input
            placeholder="Email address"
            className="w-60 h-9 m-2"
            type="text"
          />
          <button className="  bg-red-600  h-9 px-5 py-1 m-5 border border-solid rounded-md text-white ">
            Get Started
          </button>
        </form>
      </div>
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
