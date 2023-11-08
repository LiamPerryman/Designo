import { useRef } from "react";
import phone from "../assets/home/desktop/image-hero-phone.png";
import Button from "./Button";

import useFadeIn from "../hooks/useFadeIn";

function HomeBanner() {
  const reference = useRef(null);
  useFadeIn(reference);

  return (
    <header ref={reference} className="mx-auto mb-32 lg:mb-40  ">
      <div
        className={`flex flex-col lg:flex-row lg:px-24 overflow-hidden relative max-md:rounded-none rounded-2xl items-center  max-w-screen  w-full lg:h-[640px] h-[843px] bg-peach bg-[url(src/assets/home/desktop/bg-pattern-hero-home.svg)] bg-no-repeat max-sm:bg-left bg-right bg-[length:640px_640px]`}
      >
        <div className="flex z-[1] flex-col items-center px-4 max-md:px-20 lg:py-36 pt-20 h-1/2 lg:h-full lg:w-7/12 w-full text-center lg:text-left lg:items-start">
          <h1 className="text-white  text-3xl mb-8 sm:text-5xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-sm mb-8  sm:text-base lg:w-96 ">
            With over 10 years in the industry, we are experienced in creating fully responsive
            websites, app design, and engaging brand experiences. Find out more about our services.
          </p>

          <Button to={"/about"} dark={false} />
        </div>
        <img
          className="-bottom-[350px]  max-w-[624px] lg:absolute top-0 -right-20  -translate-y-24 lg:-translate-y-0 max-h-[913px]"
          src={phone}
          alt="Image of a phone"
        />
      </div>
    </header>
  );
}

export default HomeBanner;
