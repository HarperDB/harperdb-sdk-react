import { useEffect } from "react";

const HeroContent: React.FunctionComponent = ({ children }) => {
  useEffect(function mountHeroContent() {
    console.log("HeroContent mounted!");

    return function unmountHeroContent() {
      console.log("HeroContent unmounted!");
    };
  }, []);

  return (
    <div className="tw-absolute tw-inset-0 tw-mt-80">
      <div className="tw-flex tw-justify-center tw-items-center">
        <div className="tw-grid tw-gap-10">{children}</div>
      </div>
    </div>
  );
};

export default HeroContent;
