import DesignBanner from "../components/DesignBanner";
import ProjectCta from "../components/ProjectCta";
import DesignCard from "../components/DesignCard";
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";

import { useRef } from "react";
import useStaggerFadeIn from "../hooks/useStaggerFadeIn";

const text = [
  {
    img: airfilter,
    header: "EXPRESS",
    paragraph: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: eyecam,
    header: "TRANSFER",
    paragraph: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: faceit,
    header: "PHOTON",
    paragraph: "Get to meet your favorite internet superstar with the faceit app",
  },

  {
    img: todo,
    header: "BLOGR",
    paragraph: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: loopstudios,
    header: "BUILDER",
    paragraph: "A VR experience app made for Loopstudios",
  },
];

function AppDesign() {
  const cards = useRef(null);

  cards.current = [];

  const addToRefs = (el) => {
    if (el && !cards.current.includes(el)) {
      cards.current.push(el);
    }
  };

  useStaggerFadeIn(cards.current);

  return (
    <div>
      <DesignBanner
        header={"App Design"}
        paragraph={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <div className=" grid  lg:grid-cols-3 justify-center  lg:justify-around items-center mb-24 ">
        {text.map(({ img, header, paragraph }, i) => (
          <DesignCard img={img} header={header} paragraph={paragraph} refer={addToRefs} key={i} />
        ))}
      </div>
      <ProjectCta />
    </div>
  );
}

export default AppDesign;
