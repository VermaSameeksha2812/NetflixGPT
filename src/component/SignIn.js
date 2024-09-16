import React from "react";
import Header from "./Header";

function SignIn() {
  return (
    <div>
      <div className="bg-gradient-to-b from-black">
        <Header />
      </div>
      <form className="w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl m-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <button className=" bg-red-600 w-full h-9 p-2 mx-2 my-5 border border-solid rounded-md text-white ">
          Sign In
        </button>
      </form>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
        />
      </div>
    </div>
  );
}

export default SignIn;
