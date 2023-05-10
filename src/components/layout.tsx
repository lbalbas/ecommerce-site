import type { Props } from "../utils/globalTypes";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-10/12 md:w-11/12 max-w-[1400px] mx-auto py-6 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
