import { NavLink } from "react-router-dom";

function Button({ text = "LEARN MORE", dark = true, to }) {
  return (
    <NavLink to={to}>
      <button
        className={` ${
          dark ? " bg-peach  text-white " : "bg-white text-darkGray  "
        }  hover:bg-lightPeach hover:text-white cursor-pointer font-medium transition-colors ease duration-300 h-14 w-40 rounded-lg px-6 py-4`}
      >
        {text}
      </button>
    </NavLink>
  );
}

export default Button;
