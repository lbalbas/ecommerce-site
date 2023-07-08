import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LoadingBlock from "../../components/Loading";
interface Departments {
  id: string;
  name: string;
  image: string;
}
const Departments = () => {
  const [depts, setDepts] = useState<Departments[]>([]);
  const deptsData = trpc.departments.useQuery();

  useEffect(() => {
    if (deptsData.data) setDepts(deptsData.data);
  }, [deptsData.data]);

  if (deptsData.isLoading)
    return (
      <div>
        <Head>
          <title>Departments</title>
        </Head>
        <LoadingBlock size={10} />
      </div>
    );

  return (
    <div className="flex flex-col">
      <Head>
        <title>Departments</title>
      </Head>
      <h3 className="tracking-widest text-lg uppercase font-bold text-raisin my-4">
        Departments
      </h3>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-6">
        {depts.map((dept) => {
          return (
            <Link
              key={dept.id}
              className="relative w-full h-full flex rounded-2xl justify-center items-center"
              href={"/departments/" + dept.id}
            >
              <Image
                alt="Departments"
                className="rounded-2xl"
                width={290}
                height={100}
                src={dept.image}
              />
              <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
              <span className="text-center absolute text-ivory uppercase font-bold">
                {dept.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;
