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
      <PreviewData />
    </div>
  );
};

export default IndexPage;
