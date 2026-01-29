// import  Header  from "next/headers";
import Header from "./header";
import Image from "next/image";
// import '@/app/ui/global.css';
import Products from "./products";

export default function Home() {
  return (
    <>
  <Header />
  <Products/>

  </>
  );
}
