import { BsTelephonePlusFill } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="w-full bg-black">
      <div className=" max-w-6xl mx-auto  px-4  h-screen hero">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2">
            <h2 className="text-white lg:text-5xl text-4xl mt-36 font-bold font-poppins">
              Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Terbaik</span> untuk barang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">kesayangan</span> anda
            </h2>
            <p className="text-gray-300 text-lg text-gray-200 mt-10 font-poppins">
              Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan. Contact
            </p>
            <button className="px-6 py-2 rounded-lg text-white bg-cyan-500 mt-7 flex items-center font-bold font-poppins">
              Contact
              <BsTelephonePlusFill className="ml-2" />
            </button>
            <div className="flex justify-between items-center mt-10 ">
              <input
                type="text"
                // value="masukan email"
                placeholder="masukan email"
                className="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-l-md text-sm shadow-sm placeholder-slate-400
               focus:outline-none focus:border-sky-500  focus:ring-1 focus:ring-sky-500 font-poppins text-2xl
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
               focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <button className="bg-cyan-500 px-3 py-3 rounded-r-lg items-center font-poppins mt-1 text-white font-bold border-none">Berlangganan</button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/hero.png" className="lg:block hidden mt-32 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
