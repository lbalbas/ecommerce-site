import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import Head from "next/head";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const collectionsData = trpc.collections.useQuery();

  useEffect(() => {
    if (collectionsData.data) {
      setCollections(collectionsData.data);
    }
  }, [collectionsData.data]);

  if (collectionsData.isLoading)
    return (
      <div>
        <Head>
          <title>Collections</title>
        </Head>
        Loading...
      </div>
    );

  return (
    <div>
      <Head>
        <title>Collections</title>
      </Head>
      {collections.map((coll, key) => {
        return coll;
      })}
    </div>
  );
};

export default Collections;
