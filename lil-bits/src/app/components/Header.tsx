import Image from "next/image";
import lilBits from "../../../public/lilBits.png";
export default function Header() {
  return (
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
  );
}
