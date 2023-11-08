import { useRef } from "react";
import circle from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import useFadeNoStagger from "../hooks/useFadeNoStagger";

function AboutBanner() {
  const ref = useRef(null);
  useFadeNoStagger(ref);
  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${circle})` }}
      className="flex flex-col bg-peach max-sm:h-[715px] h-[632px] sm:mb-32 bg-no-repeat  md:rounded-2xl overflow-hidden min-[878px]:flex-row-reverse  min-[878px]:h-[480px] w-full"
    >
      <div
        className={` w-full  h-80 bg-no-repeat  bg-cover    bg-[url("/assets/image-about-hero-desktop.jpg")] sm:bg-[url("/assets/image-about-hero-tablet.jpg")] min-[878px]:bg-[url("/assets/image-about-hero-desktop.jpg")]  min-[878px]:h-full min-[878px]:w-1/2  lg:w-[480px]`}
      ></div>

      <div className=" flex flex-col justify-center  text-center text-white  py-20 px-6 min-[878px]:h-full min-[878px]:w-1/2  lg:px-24 lg:w-[640px] lg:text-left">
        <h1 className=" text-[32px] mb-6 md:mb-8 ">About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients.
          We’ve partnered with many startups, corporations, and nonprofits alike to craft designs
          that make real impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </div>
  );
}

export default AboutBanner;
