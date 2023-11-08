import { useRef } from "react";
import AboutBanner from "../components/AboutBanner";
import BottomAboutArticle from "../components/BottomAboutArticle";
import SeeLocationCta from "../components/SeeLocationCta";
import TopAboutArticle from "../components/TopAboutArticle";
import useFadeIn from "../hooks/useFadeIn";

function About() {
  const ref = useRef(null);

  useFadeIn(ref);
  return (
    <div>
      <AboutBanner />
      <TopAboutArticle />
      <div ref={ref}>
        <SeeLocationCta />
      </div>
      <BottomAboutArticle />
    </div>
  );
}

export default About;
