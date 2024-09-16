import React from "react";

const Header = () => {
  return (
    <div className="flex  z-10 ">
      <div className="absolute px-12 py-3 bg-gradient-to-b from-black ">
        <img
          className="w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="absolute top-0 right-0 flex bg-gradient-to-b from-black ">
        <div className=" px-12 py-5 ">
          <select className="w-24 h-8 font-semibold bg-transparent text-white border border-solid rounded-md">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className=" bg-red-600  px-5 py-1 m-5 border border-solid rounded-md ">
          <button className=" text-white ">Sign In </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
