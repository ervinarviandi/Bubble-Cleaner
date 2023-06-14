// import { useState } from "react";
// import { FaXmark } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

const Navigation = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };
  return (
    <div className="w-full bg-black fixed z-50 ">
      <div className="lg:max-w-6xl bg-white-200 mx-auto bg-black py-4 ">
        <div className="flex justify-between items-center mx-auto px-4 ">
          {/* Mobile Button */}
          {/* <div onClick={handleNav} className="block sm:hidden z-10 text-white">
              {nav ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars
                  className="w-6 h-6"
                  //  style={{ color: `${textColor}` }}
                />
              )}
            </div> */}
          <img src="/logo.png" alt="mylogo" className="w-20" />
          <nav>
            <ul className="md:flex md:justify-center  md:items-center gap-x-6 bg-cyan-700 md:z-auto md:static absolute ">
              <li>
                <a href="/" className="text-white font-poppins ">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white font-poppins ">
                  features
                </a>
              </li>
              <li>
                <a href="#lokasi" className="text-white font-poppins ">
                  lokasi
                </a>
              </li>
              <li>
                <a href="#promo" className="text-white font-poppins ">
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
