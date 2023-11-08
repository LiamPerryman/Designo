import { NavLink } from "react-router-dom";
import logoDark from "../assets/shared/desktop/logo-dark.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useFadeIn from "../hooks/useFadeIn";

function Navigation({ clicked, setClicked }) {
  const menu = useRef(null);

  const ref = useRef(null);

  useFadeIn(ref);
  useEffect(() => {
    window.addEventListener("load", () => {
      gsap.set(menu.current, {
        display: "none",
      });
    });
    if (clicked) {
      gsap.to(menu.current, {
        xPercent: 0,
        display: "flex",
        duration: 0.6,
      });
    }

    if (!clicked) {
      gsap.to(menu.current, {
        xPercent: 200,
        duration: 0.6,
      });
    }
  }, [clicked]);
  return (
    <nav className="  max-md:py-12 md:pb-16 max-md:px-12 ">
      <div className="flex justify-between items-center relative  ">
        <NavLink to="/">
          {" "}
          <img
            className="max-w-[202px] -z-30  max-h-[27px] w-full h-full"
            src={logoDark}
            alt="Designo Logo"
          />
        </NavLink>

        <div
          onClick={() => setClicked(!clicked)}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() === "enter") setClicked(!clicked);
          }}
          className={` ${
            clicked ? "" : "md:hidden "
          }  fixed flex flex-col z-50    justify-around  right-12 md:top-8 hover:justify-center h-7 w-8 hover:cursor-pointer group  transition ease-in-out duration-300  `}
        >
          <div className="h-14 w-14 overflow-hidden  -right-3 rounded-full  absolute">
            <div className=" blur-xl h-full w-full    bg-white "></div>
          </div>
          <div
            className={`bg-black h-1 w-full z-40 ${
              clicked ? "opacity-0" : ""
            } group-hover:opacity-0  transition ease-in-out duration-300 `}
          ></div>
          <div
            className={`bg-black h-1 w-full z-40  transition ease-in-out group-hover:absolute duration-300 ${
              clicked ? "absolute rotate-45" : ""
            }        group-hover:rotate-45`}
          ></div>
          <div
            className={`bg-black h-1 w-full z-40  transition ease-in-out group-hover:absolute duration-300 ${
              clicked ? " absolute rotate-[-45deg]" : ""
            }  group-hover:rotate-[-45deg]`}
          ></div>
          <div
            className={`bg-black h-1 w-full z-40 ${
              clicked ? "opacity-0" : ""
            }  group-hover:opacity-0 transition ease-in-out duration-300`}
          ></div>
        </div>
        {clicked ? (
          ""
        ) : (
          <ul ref={ref} className="max-md:hidden  flex justify-between w-96 text-4">
            <li className="group">
              <NavLink to="/about" className=" transition-all ease-in-out duration-100">
                OUR COMPANY
              </NavLink>
              <div className=" h-[2px] w-0 group-hover:w-full  transition-all ease-in-out duration-300 bg-black "></div>
            </li>
            <li className="group">
              <NavLink to="/locations" className="  transition-all ease-in-out duration-100">
                LOCATIONS
              </NavLink>
              <div className=" h-[2px] w-0 group-hover:w-full  transition-all ease-in-out duration-300 bg-black "></div>
            </li>
            <li className="group">
              <NavLink to="/contact" className="transition-all ease-in-out duration-100">
                CONTACT
              </NavLink>
              <div className=" h-[2px] w-0 group-hover:w-full  transition-all ease-in-out duration-300 bg-black "></div>
            </li>
          </ul>
        )}
      </div>
      <div
        ref={menu}
        className={` overscroll-y-none md:hidden  menu  flex flex-col items-center fixed p-5 inset-0 z-30   bg-white h-screen w-screen`}
      >
        <ul className=" flex flex-col  items-center text-center py-32  overflow-hidden  justify-around max-w-xl w-full h-full text-4xl">
          <li>
            <NavLink
              onClick={() => setClicked(!clicked)}
              to="/"
              className="hover:text-peach transition ease-in-out duration-300"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setClicked(!clicked)}
              to="/about"
              className="hover:text-peach transition ease-in-out duration-300"
            >
              OUR COMPANY
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setClicked(!clicked)}
              to="/locations"
              className="hover:text-peach transition ease-in-out duration-300"
            >
              LOCATIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setClicked(!clicked)}
              to="/contact"
              className="hover:text-peach transition ease-in-out duration-300"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
