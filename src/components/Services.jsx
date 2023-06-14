const Services = () => {
  return (
    <div className="w-full bg-white" id="product">
      <div className="lg:max-w-6xl mx-auto px-4 mb-10 py-16">
        <h2 className="text-3xl font-bold font-poppins text-center mt-10 mb-5">Layanan Kami</h2>
        <p className="font-poppins text-lg text-center mb-10 w-9/12 mx-auto text-gray-600">
          Kami memberikan berbagai macam layanan untuk perawatan barang kesayangan anda yang akan dikerjakan oleh tim kami yang sudah berpengalaman dan professional.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <div className="bg-gray-200 hover:bg-gray-100 rounded-lg p-4 cursor-pointer ">
              <img src="/cuci1.svg" alt="gambar 1" className="origin-center hover:rotate-45 duration-300 ease-in-out hover:scale-110" />
              <h2 className="font-bold text-2xl font-poppins text-center mb-4 ">Fast Cleaning</h2>
              <div className="bg-blue-500 px-4"></div>
              <p className="font-poppins text-lg text-center text-gray-600">Treatment pencucian untuk menghilangkan noda dan aman untuk semua bahan. secara cepat</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="hover:bg-gray-100 bg-gray-200 rounded-lg p-4 cursor-pointer">
              <img src="/cuci2.svg" alt="gambar 1" className="origin-center hover:rotate-45 duration-300 ease-in-out hover:scale-110" />
              <h2 className="font-bold text-2xl font-poppins text-center mb-4">Repaint</h2>
              <p className="font-poppins text-lg text-center text-gray-600">Treatment pewarnaan ulang/penggantian warna untuk mencerahkan kembali warna sepatu anda.</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-200 hover:bg-gray-100 rounded-lg p-4 cursor-pointer">
              <img src="/cuci3.svg" alt="gambar 1" className="origin-center hover:rotate-45 duration-300 ease-in-out hover:scale-110" />
              <h2 className="font-bold text-2xl font-poppins text-center mb-4">Live Chat</h2>
              <p className="font-poppins text-lg text-center text-gray-600">Live chat, Konsultasikan masalah sepatu, tas kalian langsung pada tim kami.</p>
            </div>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default Services;
