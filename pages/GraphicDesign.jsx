import DesignBanner from "../components/DesignBanner";
import ProjectCta from "../components/ProjectCta";
import DesignCard from "../components/DesignCard";
import change from "../assets/graphic-design/desktop/image-change.jpg";
import boxedwater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";

import { useRef } from "react";
import useStaggerFadeIn from "../hooks/useStaggerFadeIn";
const text = [
  {
    img: change,
    header: "TIM BROWN",
    paragraph: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    img: boxedwater,
    header: "BOXED WATER",
    paragraph: "A simple packaging concept made for Boxed Water",
  },
  {
    img: science,
    header: "SCIENCE!",
    paragraph: "A poster made in collaboration with the Federal Art Project",
  },
];
function GraphicDesign() {
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
        header={"Graphic Design"}
        paragraph={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
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

export default GraphicDesign;
