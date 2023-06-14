const Features = () => {
  return (
    <div className="w-full bg-white" id="features">
      <section className="lg:max-w-6xl mx-auto h-min px-4 ">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12">
            <img src="/features-img.webp" alt="features-gambar " className="lg:mt-20 md:mt-48 mt-10 lg:w-96 w-100  " />
          </div>
          <div className="lg:w-6/12">
            <h2 className="lg:text-4xl text-3xl font-bold lg:mt-28 mt-7 lg:text-left text-center font-poppins ">Bagaimana Kami Melakukan Perawatan untuk Barang Kesayangan Anda</h2>
            <p className="text-lg lg:text-left text-center mt-7 font-poppins text-gray-600 ">
              Kami merupakan jasa perawatan premium sepatu pertama di Indonesia berbasis media sosial yang sampai saat sudah memiliki lebih dari 65 workshop di 20 kota di Indonesia.
            </p>
            <h4 className="font-poppins text-2xl mt-7 text-left font-bold">Kami Telah Melayani Pelanggan Hampir ke Seluruh Kota di Indonesia</h4>

            <div className="lg:flex justify-center items-center gap-x-3 lg:mt-7 mt-10 mx-auto">
              <div className="lg:border-r lg:border-solid lg:border-teal-500">
                <h2 className="font-poppins font-bold mt-5">20 Kota</h2>
                <p className="font-poppins text-lg text-gray-600">Tersedia hampir diseluruh indonesia </p>
              </div>
              <div className="lg:border-r lg:border-teal-500 lg:border-solid">
                <h2 className="font-poppins font-bold mt-5">900.000++</h2>
                <p className="font-poppins text-lg text-gray-600">Pasang sepatu telah ditangani </p>
              </div>
              <div className="">
                <h2 className="font-poppins font-bold mt-5">500.000++</h2>
                <p className="font-poppins text-lg text-gray-600">Pelanggan puas dengan layanan kami</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
