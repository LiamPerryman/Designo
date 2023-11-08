function BottomAboutArticle() {
  return (
    <div className="flex flex-col bg-tan max-sm:h-[875px] h-[736px]     md:rounded-2xl overflow-hidden min-[878px]:flex-row-reverse  min-[878px]:h-[640px] w-full">
      <div
        className={` w-full  h-80 bg-no-repeat  bg-cover bg-center    bg-[url("/assets/image-real-deal-tablet.jpg")] sm:bg-[url("/assets/image-real-deal-tablet.jpg")] min-[878px]:bg-[url("/assets/image-real-deal-desktop.jpg")]  min-[878px]:h-full min-[878px]:w-1/2  lg:w-[480px]`}
      ></div>

      <div className=" flex flex-col justify-center  text-center text-white  py-20 px-14 min-[878px]:h-full min-[878px]:w-1/2  lg:px-24 lg:w-[640px] lg:text-left">
        <h1 className="text-peach text-[32px] mb-6 md:mb-8 ">The real deal</h1>
        <p className="text-darkGray mb-8">
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as
          our own. Solving real problems require empathy and collaboration, and we strive to bring a
          fresh perspective to every opportunity. We make design and technology more accessible and
          give you tools to measure success.
        </p>
        <p className="text-darkGray">
          We are visual storytellers in appealing and captivating ways. By combining business and
          marketing strategies, we inspire audiences to take action and drive real results.
        </p>
      </div>
    </div>
  );
}

export default BottomAboutArticle;
