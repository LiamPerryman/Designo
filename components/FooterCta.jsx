import circles from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import Button from "./Button";

function FooterCta() {
  return (
    <div
      style={{
        backgroundImage: `url(${circles})`,

        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center",
      }}
      className="flex flex-col lg:flex-row lg:justify-between lg:px-24 lg:py-[72px] items-center text-center py-16 px-6 md:p-14 justify-center bg-peach h-96 lg:h-[350px] xl:h-72 w-full rounded-xl   translate-y-48 sm:translate-y-32 lg:translate-y-24    "
    >
      <div className="flex flex-col justify-center lg:items-start lg:text-left items-center">
        <h1 className=" text-[32px] md:text-4xl break-keep  text-white mb-2 sm:w-60 ">
          Let’s talk about your project
        </h1>

        <p className="text-white text-base mb-8  md:w-[450px]">
          Ready to take it to the next level? Contact us today and find out how our expertise can
          help your business grow.
        </p>
      </div>
      <Button text="GET IN TOUCH" dark={false} to={"/contact"} />
    </div>
  );
}

export default FooterCta;
