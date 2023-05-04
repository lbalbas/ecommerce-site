import type { Props } from "../utils/globalTypes";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto py-6 flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
