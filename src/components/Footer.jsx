import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className=" lg:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="flex flex-col md:flex-row gap-20 md:gap-32">
            <div className="md:w-1/2">
              <div className=" mt-5 px-4 py-4">
                <img src="/logo.png" alt="brand-footer" width={90} height={90} className="bg-black p-2 rounded-md" />
              </div>
              <p className="font-poppins text-lg text-black">Kami merupakan jasa perawatan premium sepatu pertama di Indonesia berbasis media sosial yang sampai saat sudah memiliki lebih dari 70 workshop di 20 kota di Indonesia.</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-blue-500">
                  <BsWhatsapp />
                </div>
                <p className="font-poppins">+628856787876</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-blue-500">
                  <MdEmail />
                </div>
                <p className="font-poppins">CleanerBubble@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-black font-poppins md:mt-20 mt-7 font-bold text-2xl">Kantor Yogykarta:</h2>
              <p className="font-poppins text-lg ">Jl. Langenastran Kidul No.18, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131</p>

              <h2 className="font-poppins text-black text-2xl mt-7 font-bold">Media Sosial</h2>

              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-blue-500">
                  <AiFillInstagram />
                </div>
                <div className="bg-black text-white p-3 rounded-full hover:bg-blue-500">
                  <BsFacebook />
                </div>
              </div>
            </div>
          </div>
          <div className="md:my-10 mt-10 mb-4 ">
            <p className="font-poppins text-black text-md ">
              © 2020-2023 <span className="text-blue-500 border-b border-b-2 border-blue-500"> Cleaner Bubble</span>. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
