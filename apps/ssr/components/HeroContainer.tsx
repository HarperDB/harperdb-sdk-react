import { useEffect } from "react";

interface WindowParticles extends Window {
  particlesJS: {
    load: (id: string, asset: string, cb?: () => void) => void;
  };
}

const HeroContainer: React.FunctionComponent = ({ children }) => {
  useEffect(function mountHeroContainer() {
    console.log("HeroContainer mounted!");

    async function importParticles() {
      await import("particles.js");
      (window as unknown as WindowParticles).particlesJS.load("particles-js", "/static/particles.json");
    }

    importParticles();

    return function unmountHeroContainer() {
      console.log("HeroContainer unmounted!");
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="tw-grid tw-bg-auto tw-bg-gradient-to-r tw-from-accent1 tw-via-accent2 tw-to-accent3 tw-h-256"
    >
      {children}
    </div>
  );
};

export default HeroContainer;
