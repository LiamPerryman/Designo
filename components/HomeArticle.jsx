import friendly from "../assets/home/desktop/illustration-friendly.svg";

import passionate from "../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HomeArticle() {
  const articles = useRef([]);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    articles.current = [one.current, two.current, three.current];
    gsap.set(articles.current, {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: articles.current,
      },
    });

    gsap.to(articles.current, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: articles.current,
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <div className="flex flex-col md:justify-between  max-md:px-6 lg:items-center lg:flex-row w-full">
      <div ref={one}>
        <Article
          img={passionate}
          heading={"PASSIONATE"}
          paragraph={
            "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          }
        />
      </div>
      <div ref={two}>
        <Article
          img={resourceful}
          heading={"RESOURCEFUL"}
          paragraph={
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          }
        />
      </div>
      <div ref={three}>
        <Article
          img={friendly}
          heading={"FRIENDLY"}
          paragraph={
            " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          }
        />
      </div>
    </div>
  );
}

export default HomeArticle;

function Article({ img, heading, paragraph }) {
  return (
    <article>
      <div className="flex flex-col md:flex-row lg:flex-col justify-between items-center mb-20 md:mb-8 lg:w-[350px] lg:h-[412px] ">
        <div
          style={{ backgroundImage: `url(${circle})`, backgroundSize: "contain" }}
          className=" mb-12 md:mb-0 "
        >
          <img className="w-full h-full" src={img} alt={heading} />
        </div>
        <div className="text-center md:w-[439px] lg:w-full lg:">
          <h1 className=" text-xl mb-8 tracking-[5px]">{heading}</h1>
          <p className="text-base font-light">{paragraph}</p>
        </div>
      </div>
    </article>
  );
}
