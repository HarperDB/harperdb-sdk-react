import { useEffect } from "react";

const ButtonTrigger: React.FunctionComponent = () => {
  useEffect(function mountButtonTrigger() {
    console.log("ButtonTrigger mounted!");

    return function unmountButtonTrigger() {
      console.log("ButtonTrigger unmounted!");
    };
  }, []);

  return (
    <div className="tw-flex tw-justify-center tw-items-center">
      <button className="tw-font-light tw-tracking-widest tw-leading-relaxed tw-text-white tw-text-lg tw-p-3 tw-rounded tw-bg-black tw-bg-opacity-50 hover:tw-bg-opacity-100 tw-duration-200 tw-ease-in-out">
        TRIGGER HTTP
      </button>
    </div>
  );
};

export default ButtonTrigger;
