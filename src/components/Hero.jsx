import { BsTelephonePlusFill } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="w-full bg-black">
      <div className=" max-w-6xl mx-auto  px-4  h-screen">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2">
            <h2 className="text-white lg:text-5xl text-4xl mt-20 font-bold font-poppins">
              Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Terbaik</span> untuk barang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">kesayangan</span> anda
            </h2>
            <p className="text-white text-lg text-gray-200 mt-10 font-poppins">
              Kami menangani perawatan sepatu, tas, topi, dan dompet. Kami melakukan perawatan secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk melakukan perawatan. Contact
            </p>
            <button className="px-6 py-2 rounded-lg text-white bg-blue-500 mt-7 flex items-center font-bold font-poppins">
              Contact
              <BsTelephonePlusFill className="ml-2" />
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src="/hero.png" className="lg:block hidden backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
