import type { Props } from "../utils/globalTypes";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>

      <Header />
      <main className="w-11/12 max-w-[1150px] self-start mx-auto py-6 flex flex-col">
        {children}
      </main>
      </div>
      <Footer />
    </div>
  );
}
