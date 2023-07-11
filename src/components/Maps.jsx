const Maps = () => {
  return (
    <div className="w-full bg-black" id="lokasi">
      <div className="h-screen lg:max-w-6xl mx-auto py-10 px-7 ">
        <h2 className="text-white text-3xl font-poppins text-center pt-32 mb-5 ">Lokasi Kami</h2>
        <p className="text-gray-300 text-lg font-poppins text-center">Temukan Kami Di Kota Terdekat Sekitar Anda</p>
        <div style={{ height: "60%", width: "100%" }} className="mt-10 bg-gray-600">
          <iframe
            title="google maps api"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CCWJ+9M8,%20Kandai%20Dua,%20Kec.%20Woja,%20Kabupaten%20Dompu,%20Nusa%20Tenggara%20Bar.,%20Indonesia+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/sport-gps/">swimming watch</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
