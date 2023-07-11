import { FaAngleRight } from "react-icons/fa";
import Card from "./Elements/Card";

const Promo = () => {
  return (
    <div className="bg-backgrounddark" id="promo">
      <section className="w-full  mt-56 ">
        <div className="lg:max-w-6xl h-min  mx-auto px-7 ">
          <div className="md:flex justify-between items-center md:pt-32   pt-20">
            <h2 className="text-3xl font-poppins text-bold text-white  mb-10">Promo terbaik untuk anda</h2>
            <a href="/" className="text-lg font-poppins text-gray-300 flex items-center hover:text-blue-500 mb-4 ">
              lihat semua promo
              <FaAngleRight className="ml-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-5 ">
            <div className="flex flex-col">
              <Card />
            </div>
            <div className="flex flex-col">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
