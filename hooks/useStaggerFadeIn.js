import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
function useStaggerFadeIn(ref) {
  return useEffect(() => {
    gsap.set(ref, {
      yPercent: 50,
    });

    gsap.to(ref, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ref,

        toggleActions: "play none none none",
      },
    });
  }, [ref]);
}

export default useStaggerFadeIn;
