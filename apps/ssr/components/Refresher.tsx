import { useEffect } from "react";

type RefresherProps = {
  onClick: () => void;
};

const Refresher: React.FunctionComponent<RefresherProps> = ({ onClick }) => {
  useEffect(function mountRefresher() {
    console.log("Refresher mounted!");

    return function unmountRefresher() {
      console.log("Refresher unmounted!");
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className="tw-fixed tw-bottom-5 tw-left-5 tw-p-3 tw-font-light tw-leading-relaxed tw-text-lg tw-text-white tw-bg-gradient-to-r tw-from-accent1 tw-via-accent2 tw-to-accent3 tw-shadow-lg tw-rounded"
    >
      REFRESH
    </button>
  );
};

export default Refresher;
