import { NavLink, useLocation } from "react-router-dom";
import WEB from "../assets/home/desktop/image-web-design-large.jpg";
import APP from "../assets/home/desktop/image-app-design.jpg";
import GRAPHIC from "../assets/home/desktop/image-graphic-design.jpg";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import useFadeIn from "../hooks/useFadeIn";
import { useRef } from "react";

function ProjectCta() {
  const location = useLocation();
  console.log();
  return (
    <div
      className={`grid justify-center grid-cols-1 items-center ${
        location.pathname === "/" ? " mb-32  lg:mb-40" : ""
      }  lg:grid-cols-2  max-md:px-6 gap-6 lg:h-[640px]    `}
    >
      {location.pathname === "/web-design" ? (
        ""
      ) : (
        <div
          className={`${
            location.pathname === "/app-design" || location.pathname === "/graphic-design"
              ? "lg:h-full"
              : "row-span-2  lg:h-[640px]"
          } `}
        >
          <NavLink to="/web-design">
            <CTA project={"web"} img={WEB} />
          </NavLink>
        </div>
      )}

      {location.pathname === "/app-design" ? (
        ""
      ) : (
        <div className=" lg:h-full">
          <NavLink to="/app-design">
            <CTA project={"app"} img={APP} />
          </NavLink>
        </div>
      )}
      {location.pathname === "/graphic-design" ? (
        ""
      ) : (
        <div className="   lg:h-full">
          <NavLink to="/graphic-design">
            <CTA project={"graphic"} img={GRAPHIC} />
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ProjectCta;

function CTA({ project, img }) {
  const cta = useRef(null);

  useFadeIn(cta);

  return (
    <div
      ref={cta}
      style={{
        backgroundImage: `url(${img}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col text-white   justify-center items-center cursor-pointer relative h-64 lg:h-full  w-full group rounded-2xl max-h-[640px]"
    >
      <div className="w-full  h-full absolute inset-0 rounded-xl z-0 bg-black transition-colors ease-in-out duration-300  group-hover:bg-peach opacity-80  "></div>

      <div className=" z-[1] text-center">
        {" "}
        <h1 className=" text-3xl md:text-[40px] mb-3">{project.toUpperCase()} DESIGN</h1>
        <div className="flex flex-row items-center">
          <p className="mr-2 text-base tracking-[8px]">VIEW PROJECTS </p>
          <span>
            <img className=" h-2" src={arrow} alt="arrow pointing right" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
