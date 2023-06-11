import { FaAngleRight } from "react-icons/fa";
import Card from "./Elements/Card";

const Promo = () => {
  return (
    <div className="bg-backgrounddark" id="promo">
      <section className="w-full  mt-56">
        <div className="lg:max-w-6xl h-min  mx-auto px-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-poppins text-bold text-white my-10">Promo terbaik untuk anda</h2>
            <a href="" className="text-lg font-poppins text-gray-400 flex items-center hover:text-blue-500">
              lihat semua promo
              <FaAngleRight className="lg:ml-4" />
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
