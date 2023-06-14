const AboutUs = () => {
  return (
    <div className="w-full bg-black " id="about">
      <div className="lg:max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-poppins text-white text-center md:mt-30 ">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col">
            <img src="/icon-founder.jpg" alt="imgaes" className="rounded-2xl" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl text-white font-poppins mt-7">Shoes and Care</h2>
            <p className="text-lg font-poppins  mt-7 text-gray-300">
              merupakan jasa perawatan premium sepatu yang pertama di Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes and Care sudah memiliki 70
              workshop di 20 kota di Indonesia. Berdiri di Yogyakarta, Shoes and Care mulai memberikan perawatan sepatu sejak 12 Oktober 2013.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
