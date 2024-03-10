// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Calcula el offset. Ajusta este valor según la altura de tu navbar.
        const offset = 110; // Ejemplo: altura del navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return children;
};
