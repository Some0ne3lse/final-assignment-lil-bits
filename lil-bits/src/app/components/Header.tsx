import Image from "next/image";
import lilBits from "../../../public/lilBits.png";
import Head from "next/head";
export default function Header() {
  return (
    <>
      <Head>
        <link rel="preload" href="/lilBits.png" as="image" />
      </Head>
      <div className="header">
        <Image
          src={lilBits}
          width={150}
          height={144}
          alt="Lil' Bits logo"
          priority
        />
        <h2>Select Dish</h2>
        <h2>Select Drinks</h2>
        <h2>Order Screen</h2>
        <h2>Receipt</h2>
      </div>
    </>
  );
}
