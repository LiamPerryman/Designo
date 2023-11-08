import { Link, NavLink } from "react-router-dom";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import logoLight from "../assets/shared/desktop/logo-light.png";

function NavigationFooter() {
  return (
    <nav className="">
      <div className=" max-w-[1120px] flex flex-col flex-wrap md:flex-row  h-full w-full text-center justify-between items-center mx-auto  ">
        <div className="flex mx-auto flex-col md:flex-row md:justify-between items-center w-full">
          <div className="xl:w-1/2">
            <NavLink to="/">
              {" "}
              <img
                className="max-w-[202px] -z-30 mb-8  max-h-[27px] w-96 h-full"
                src={logoLight}
                alt="Designo Logo"
              />
            </NavLink>
          </div>
          <div className=" h-[1px] w-full bg-[#979797] md:hidden mb-8"></div>
          <ul className=" flex flex-col flex-wrap md:flex-row  justify-between w-1/2  lg:w-1/3 text-4 mb-10 ">
            <li className="text-white mb-8 md:mb-0">
              <NavLink to="/about" className="hover:text-peach transition ease-in-out duration-300">
                OUR COMPANY
              </NavLink>
            </li>
            <li className="text-white mb-[40px] md:mb-0">
              <NavLink
                to="/locations"
                className="hover:text-peach transition ease-in-out duration-300"
              >
                LOCATIONS
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/contact"
                className="hover:text-peach transition ease-in-out duration-300"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" h-[1px] w-full hidden md:flex bg-[#979797]  mb-8"></div>
        <div className="text-white  opacity-40 leading-7 mb-[40px]">
          <h1>Designo Central Office</h1>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="text-white opacity-40 leading-7 mb-[40px] ">
          <h1>Contact Us (Central Office)</h1>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="flex justify-between w-[184px]  ">
          <Link to={"https://www.facebook.com/"}>
            {" "}
            <img className=" cursor-pointer " src={facebook} alt="facebook logo" />
          </Link>
          <Link to={"https://www.youtube.com/"}>
            {" "}
            <img className=" cursor-pointer " src={youtube} alt="Youtube logo" />
          </Link>
          <Link to={"https://www.twitter.com/"}>
            {" "}
            <img className=" cursor-pointer " src={twitter} alt="Twitter logo" />
          </Link>
          <Link to={"https://www.pinterest.com/"}>
            {" "}
            <img className=" cursor-pointer " src={pinterest} alt="Pinterest logo" />
          </Link>
          <Link to={"https://www.instagram.com/"}>
            {" "}
            <img className=" cursor-pointer " src={instagram} alt="Instagram logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationFooter;
