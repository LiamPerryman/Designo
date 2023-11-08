import { gsap } from "gsap";
import { useEffect } from "react";

function useFadeNoStagger(ref) {
  useEffect(() => {
    const el = ref.current;
    gsap.set(el, {
      yPercent: 50,
      opacity: 0,
    });
    gsap.to(el, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
    });
  }, [ref]);
}

export default useFadeNoStagger;
