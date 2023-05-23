import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Departments = () => {
  const [depts, setDepts] = useState([]);
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
        Loading...
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
      <div className="grid w-full grid-cols-3 gap-6">
        {depts.map((dept) => {
          return (
            <Link
              className="relative w-full h-full flex rounded-2xl justify-center items-center"
              href={"/departments/" + dept.name}
            >
              <Image
                alt="Departments"
                className="rounded-2xl"
                width={290}
                height={100}
                src={dept.image}
              />
              <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
              <span className="absolute text-ivory uppercase font-bold">
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
