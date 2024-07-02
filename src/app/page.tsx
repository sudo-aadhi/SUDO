import Image from "next/image";
import Main from "./components/Main";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0E0F15]">
      <Header />
      <Main />
    </main>
  );
}
