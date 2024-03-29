import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LoadingBlock from "../../components/Loading";

interface Collections {
  id: string;
  name: string;
  description: string;
  image: string;
}
const Collections = () => {
  const [collections, setCollections] = useState<Collections[]>([]);
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
        <LoadingBlock size={32} />
      </div>
    );

  return (
    <div>
      <Head>
        <title>Collections</title>
      </Head>
      {collections.map((coll, key) => {
        return (
          <Link
            key={coll.id}
            className="relative w-full h-full flex rounded-2xl justify-center items-center"
            href={"/collections/" + coll.id}
          >
            <Image
              alt="Departments"
              className="rounded-2xl"
              width={290}
              height={100}
              src={coll.image}
            />
            <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
            <span className="absolute text-ivory uppercase font-bold">
              {coll.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Collections;
