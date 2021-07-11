import { useEffect } from "react";

import Hero from "../components/Hero";
import Nav from "../components/Nav";
import JSONViewer from "../components/JSONViewer";

const content = `
{
  "hola": {
    "mundo": 67
  }
}
`;

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
      <div className="tw-grid tw-gap-5 tw-mx-5 lg:tw-mx-40 xl:tw-mx-64 2xl:tw-mx-128 tw-my-20">
        <h2 className="tw-text-2xl tw-text-gray-800 tw-font-black">Preview content:</h2>
        <JSONViewer content={content} />
      </div>
    </div>
  );
};

export default IndexPage;
