function DesignCard({ img, header, paragraph, refer }) {
  return (
    <div
      ref={refer}
      className=" transition-all opacity-0  group  ease-in-out duration-700 overflow-hidden shadow-2xl rounded-xl flex flex-col w-full [478px]  md:flex-row lg:flex-col cursor-pointer   lg:w-[350px]  bg-[#FDF3F0]  lg:max-w-[310px] min-[1400px]:max-w-[350px]   xl:max-w-[310px]     md:h-80 lg:h-[478px] mb-10  max-lg:max-w-[688px] "
    >
      <img
        className="h-[320px] w-full md:w-[339px]  lg:h-[350px]  min-[1400px]:w-[350px]  "
        src={img}
        alt=""
      />

      <div className="flex flex-col h-40 md:h-full md:w-[310px] min-[1400px]:w-[350px]  md:transition-all  ease-in-out  md:duration-700 group-hover:bg-peach text-white  bg-[#FDF3F0] text-center justify-center items-center ">
        <h1 className="text-peach group-hover:text-white tracking-[5px] text-xl mb-4">{header}</h1>
        <p className="text-black  group-hover:text-white text-base max-w-[267px]">{paragraph}</p>
      </div>
    </div>
  );
}

export default DesignCard;
