import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  );
}
