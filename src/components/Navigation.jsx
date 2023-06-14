import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import "animate.css";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full z-50 bg-black">
      <div className="w-full max-w-6xl mx-auto z-10 relative bg-black py-4 relative ">
        <div className="lg:flex  lg:block justify-between  items-center md:py-2 py-4">
          {/* Mobile Button */}

          <a href="/">
            <img src="logo.png" alt="brand" width={90} height={90} className="lg:block hidden" />
          </a>
          <ul
            // style={{ color: `${textColor}` }}
            className="flex space-x-9 md:px-4 text-Cokelat items-center  "
          >
            <li className="lg:block hidden">
              <a href="/" className="font-poppins  hover:text-cyan-500 text-white">
                Beranda
              </a>
            </li>
            <li className="lg:block hidden">
              <a href="#promo" className="font-poppins  hover:text-cyan-500 text-white">
                Promo
              </a>
            </li>
            <li className="lg:block hidden">
              <a href="#product" className="font-poppins  hover:text-cyan-500 text-white">
                Layanan
              </a>
            </li>
            <li className="lg:block hidden">
              <a href="#lokasi" className="font-poppins  hover:text-cyan-500 text-white">
                Lokasi
              </a>
            </li>

            <li>
              <button href="/" className="font-poppins py-2 px-4 rounded-xl bg-cyan-500 text-white lg:block hidden ">
                Tentang Kami
              </button>
            </li>

            <a href="/" className=" absolute">
              <img src="/logo.png" alt="mobile-brand" width={80} height={80} className="lg:hidden block " />
            </a>

            <div onClick={handleNav} className=" block sm:hidden  z-50 text-white absolute right-10">
              {nav ? (
                <GrFormClose className="w-10 h-10 text-blue-400 bg-cyan-500 rounded-md p-2 transition duration-700 " />
              ) : (
                <HiMenuAlt3 className="w-10 h-10 text-white bg-cyan-500 rounded-md p-2 transition duration-700 ease-in-out   " />
              )}
            </div>
          </ul>

          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-9/12 h-screen  text-center bg-black ease-in duration-300 z-8  "
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in  duration-300 z-8 text-white   "
            }
          >
            <ul>
              <li className="p-4 text-2xl hover:text-cyan-500 font-poppins text-white hover:animate_animated hover:animate__backInLeft  ">
                <a href="/">Beranda</a>
              </li>
              <hr className="text-sky-500 w-[100%]" />
              <li className="p-4 text-2xl hover:text-cyan-500 font-poppins text-white">
                <a href="#promo">Promo</a>
              </li>
              <hr />
              <li className="p-4 text-2xl hover:text-cyan-500 font-poppins text-white">
                <a href="#product">Layanan</a>
              </li>
              <hr />
              <li className="p-4 text-2xl hover:text-cyan-500 font-poppins text-white ">
                <a href="#about">Tentang Kami</a>
              </li>
              <hr />
              <li className="p-4 text-2xl hover:text-cyan-500 font-poppins text-white">
                <a href="#lokasi">Lokasi</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
