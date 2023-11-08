import DesignBanner from "../components/DesignBanner";
import DesignCard from "../components/DesignCard";
import ProjectCta from "../components/ProjectCta";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import express from "../assets/web-design/desktop/image-express.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import { useRef } from "react";
import useStaggerFadeIn from "../hooks/useStaggerFadeIn";

const text = [
  {
    img: express,
    header: "EXPRESS",
    paragraph: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: transfer,
    header: "TRANSFER",
    paragraph: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    img: photon,
    header: "PHOTON",
    paragraph: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    img: builder,
    header: "BUILDER",
    paragraph: "Connects users with local contractors based on their location",
  },
  {
    img: blogr,
    header: "BLOGR",
    paragraph: "Blogr is a platform for creating an online blog or publication",
  },
  {
    img: camp,
    header: "CAMP",
    paragraph: "Get expert training in coding, data, design, and digital marketing",
  },
];
function WebDesign() {
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
        header={"Web Design"}
        paragraph={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences"
        }
      />
      <div className=" grid  lg:grid-cols-3 justify-center lg:flex-wrap lg:flex lg:justify-around items-center mb-24 ">
        {text.map(({ img, header, paragraph }, i) => (
          <DesignCard img={img} header={header} paragraph={paragraph} refer={addToRefs} key={i} />
        ))}
      </div>
      <ProjectCta />
    </div>
  );
}

export default WebDesign;
