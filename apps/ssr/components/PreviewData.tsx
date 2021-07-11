import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useHarperDB } from "use-harperdb";

import JSONViewer from "./JSONViewer";
import Refresher from "./Refresher";

const PreviewData: React.FunctionComponent = () => {
  const [data, loading, error, refresh] = useHarperDB({
    query: { operation: "sql", sql: "select * from local.dogs" },
    interval: 1000,
    onLoad() {
      toast.success(`Data loaded from HarperDB ${new Date().toLocaleString()}`);
    },
    onError() {
      toast.error(`Data failed from HarperDB ${new Date().toLocaleString()}`);
    },
  });

  useEffect(function mountPreviewData() {
    console.log("PreviewData mounted!");

    return function unmountPreviewData() {
      console.log("PreviewData unmounted!");
    };
  }, []);

  return (
    <div className="tw-grid tw-gap-5 tw-mx-5 lg:tw-mx-40 xl:tw-mx-64 2xl:tw-mx-96 tw-my-20">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="tw-grid tw-gap-5 tw-border tw-border-red-500">
          <Refresher onClick={refresh} />
          <h5 className="tw-text-red tw-uppercase">Error on fetch</h5>
          <pre>
            <code>{JSON.stringify(error)}</code>
          </pre>
        </div>
      ) : data ? (
        <>
          <Refresher onClick={refresh} />
          <h2 className="tw-text-2xl tw-text-gray-800 tw-font-black">Preview content:</h2>
          <JSONViewer content={JSON.stringify(data, null, 2)} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PreviewData;
