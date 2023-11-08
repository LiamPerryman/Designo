import { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import FooterCta from "./FooterCta";
import NavigationFooter from "./NavigationFooter";

function Footer() {
  const ref = useRef(null);
  useFadeIn(ref);
  return (
    <footer>
      <div ref={ref} className="max-w-[1440px] mx-auto     md:px-10 px-6 xl:px-40">
        <FooterCta />
      </div>
      <div
        className="w-screen  h-[865px] md:h-[423px] pt-64 md:pt-44   lg:pt-36 xl:px-40  px-6 pb-16  lg:h-[423px] xl:h-96  
        bg-black"
      >
        <NavigationFooter dark={false} />
      </div>
    </footer>
  );
}

export default Footer;
