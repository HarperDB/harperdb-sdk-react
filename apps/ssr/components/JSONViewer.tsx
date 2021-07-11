import { useEffect } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";

type JSONViewerProps = {
  content: string;
};

const JSONViewer: React.FunctionComponent<JSONViewerProps> = ({ content }) => {
  useEffect(function mountJSONViewer() {
    console.log("JSONViewer mounted!");

    return function unmountJSONViewer() {
      console.log("JSONViewer unmounted!");
    };
  }, []);

  return (
    <div className="tw-border tw-flex">
      <SyntaxHighlighter language="json" style={theme}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default JSONViewer;
