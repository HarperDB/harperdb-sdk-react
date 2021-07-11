import { useEffect } from "react";

import Hero from "../components/Hero";
import Nav from "../components/Nav";
import PreviewData from "../components/PreviewData";

const IndexPage: React.FunctionComponent = () => {
  useEffect(function mountIndexPage() {
    console.log("IndexPage mounted!");

    return function unmountIndexPage() {
      console.log("IndexPage unmounted!");
    };
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <div className="tw-grid tw-gap-5 tw-mx-5 lg:tw-mx-40 xl:tw-mx-64 2xl:tw-mx-96 tw-my-20">
        <PreviewData />
      </div>
    </div>
  );
};

export default IndexPage;
