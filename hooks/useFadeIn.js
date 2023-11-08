import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current;
    gsap.set(el, {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: el,

        scrub: 1,
      },
    });
    gsap.to(el, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        toggleActions: "play none none none",
      },
    });
  }, [ref]);
}

export default useFadeIn;
