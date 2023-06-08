const Card = () => {
  return (
    <div>
      <div className="rounded-md overflow-hidden dark:bg-primary bg-slate-200 mb-10" data-aos="fade-up">
        <picture className="block overflow-hidden ">
          <img src="/cardimage-1.jpeg" alt="expense-project" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
        </picture>
        <div className="mt-3 p-4">
          <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
            <a className="dark:hover:border-b-2 dark:hover:border-dashed  " href="NuggetApp">
              {" "}
              Promo Diskon 30% SAC Magelang
            </a>
          </h3>
          <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
            {/* <TailwindLogo />
            <Nextjs /> */}
          </div>

          <button className="font-poppins text-lg w-full bg-white py-3">Lihat Promo</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
