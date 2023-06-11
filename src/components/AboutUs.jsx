import { FaAngleRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-full bg-black " id="about">
      <div className="lg:max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-poppins text-white text-center mt-30">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col">
            <img src="/icon-founder.jpg" alt="imgaes" className="rounded-2xl" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl text-white font-poppins mt-7">Shoes and Care</h2>
            <p className="text-lg font-poppins text-gray-200 mt-7">
              merupakan jasa perawatan premium sepatu yang pertama di Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes and Care sudah memiliki 70
              workshop di 20 kota di Indonesia. Berdiri di Yogyakarta, Shoes and Care mulai memberikan perawatan sepatu sejak 12 Oktober 2013.
            </p>
            <button className="py-2 px-4 font-poppins text-lg  text-black bg-white lg:w-5/12 w-6/12 rounded-lg mt-4 flex items-center ">
              Baca Lebih Lanjut
              <FaAngleRight className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
