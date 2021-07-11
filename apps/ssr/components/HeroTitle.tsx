import { useEffect } from "react";

type HeroTitleProps = {
  text: string;
};

const HeroTitle: React.FunctionComponent<HeroTitleProps> = ({ text }) => {
  useEffect(function mountHeroTitle() {
    console.log("HeroTitle mounted!");

    return function unmountHeroTitle() {
      console.log("HeroTitle unmounted!");
    };
  }, []);

  return (
    <h1 className="tw-font-sans tw-text-4xl tw-text-white tw-font-extralight tw-leading-relaxed tw-tracking-widest">
      {text}
    </h1>
  );
};

export default HeroTitle;
