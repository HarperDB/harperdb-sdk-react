import { useEffect } from "react";

import Logo from "./Logo";

const Nav: React.FunctionComponent = () => {
  useEffect(function mountNav() {
    console.log("Nav mounted!");

    return function unmountNav() {
      console.log("Nav unmounted!");
    };
  }, []);

  return (
    <div className="tw-fixed tw-z-50 tw-top-0 tw-w-full tw-bg-black tw-bg-opacity-50 tw-py-3 tw-px-20">
      <div className="tw-flex tw-justify-between">
        <Logo width={150} />
      </div>
    </div>
  );
};

export default Nav;
