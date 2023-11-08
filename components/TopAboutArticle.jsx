function TopAboutArticle() {
  return (
    <div className="flex flex-col bg-tan max-sm:h-[875px] h-[736px] mb-40    md:rounded-2xl overflow-hidden min-[878px]:flex-row  min-[878px]:h-[640px] w-full">
      <div
        className={` w-full  h-80 bg-no-repeat  bg-cover bg-center    bg-[url("/assets/image-world-class-talent-tablet.jpg")] sm:bg-[url("/assets/image-world-class-talent-tablet.jpg")] min-[878px]:bg-[url("/assets/image-world-class-talent-desktop.jpg")]  min-[878px]:h-full min-[878px]:w-1/2  lg:w-[480px]`}
      ></div>

      <div className=" flex flex-col justify-center  text-center text-white  py-20 px-14 min-[878px]:h-full min-[878px]:w-1/2  lg:px-24 lg:w-[640px] lg:text-left">
        <h1 className="text-peach text-[32px] mb-6 md:mb-8 ">World-class talent</h1>
        <p className="text-darkGray mb-8">
          We are a crew of strategists, problem-solvers, and technologists. Every design is
          thoughtfully crafted from concept to launch, ensuring success in its given market. We are
          constantly updating our skills in a myriad of platforms.
        </p>
        <p className="text-darkGray">
          Our team is multi-disciplinary and we are not merely interested in form — content and
          meaning are just as important. We give great importance to craftsmanship, service, and
          prompt delivery. Clients have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </div>
  );
}

export default TopAboutArticle;
