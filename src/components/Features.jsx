const Features = () => {
  return (
    <div className="">
      <div className="lg:max-w-6xl mx-auto h-screen px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12">
            <img src="/features-img.webp" alt="features-gambar " className="lg:mt-20 mt-48 lg:w-96 w-100  " />
          </div>
          <div className="lg:w-6/12">
            <h2 className="lg:text-4xl text-3xl font-bold lg:mt-28 mt-7 lg:text-left text-center font-poppins">Bagaimana Kami Melakukan Perawatan untuk Barang Kesayangan Anda</h2>
            <p className="text-lg lg:text-left text-center mt-7 font-poppins ">
              Kami merupakan jasa perawatan premium sepatu pertama di Indonesia berbasis media sosial yang sampai saat sudah memiliki lebih dari 65 workshop di 20 kota di Indonesia.
            </p>
            <h4 className="font-poppins text-2xl mt-7 lg:text-left text-center">Kami Telah Melayani Pelanggan Hampir ke Seluruh Kota di Indonesia</h4>

            <div className="flex justify-center items-center gap-x-3 mt-7 mx-auto">
              <div className="border-r border-solid border-teal-500">
                <h2 className="font-poppins font-bold">20 Kota</h2>
                <p className="font-poppins text-lg">Tersedia hampir diseluruh indonesia </p>
              </div>
              <div className="border-r border-teal-500 border-solid">
                <h2 className="font-poppins font-bold">900.000++</h2>
                <p className="font-poppins text-lg">Pasang sepatu telah ditangani </p>
              </div>
              <div className="">
                <h2 className="font-poppins font-bold">500.000++</h2>
                <p className="font-poppins text-lg">Pelanggan puas dengan layanan kami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
