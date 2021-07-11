import { useEffect } from "react";

import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import HeroTitle from "./HeroTitle";

const Hero: React.FunctionComponent = () => {
  useEffect(function mountHero() {
    console.log("Hero mounted!");

    return function unmountHero() {
      console.log("Hero unmounted!");
    };
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle text="HarperDB SSR Test" />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
