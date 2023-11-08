import circles from "../assets/shared/desktop/bg-pattern-call-to-action.svg";

function DesignBanner({ header, paragraph }) {
  return (
    <header>
      <div
        style={{
          backgroundImage: `url(${circles})`,

          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "center",
        }}
        className="flex flex-col justify-center items-center bg-peach mx-0 md:rounded-xl h-96 mb-24 md:mb-40 text-center"
      >
        <h1 className=" text-[32px] md:text-5xl text-white mb-6">{header}</h1>
        <p className="text-white max-w-sm">{paragraph}</p>
      </div>
    </header>
  );
}

export default DesignBanner;
