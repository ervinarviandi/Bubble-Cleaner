// import React from "react";

const Navigation = () => {
  return (
    <div>
      <div className="lg:max-w-6xl bg-white-200 mx-auto bg-black py-4">
        <div className="flex justify-between items-center mx-auto px-4">
          <img src="/logo.png" alt="mylogo" className="w-20" />
          <nav>
            <ul className="flex justify-center items-center gap-x-6">
              <li>
                <a href="" className="text-white ">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-white ">
                  About
                </a>
              </li>
              <li>
                <a href="" className="text-white ">
                  Project
                </a>
              </li>
              <li>
                <a href="" className="text-white ">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
