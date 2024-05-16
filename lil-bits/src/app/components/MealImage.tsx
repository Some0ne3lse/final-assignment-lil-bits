import Image from "next/image";
import { Provision } from "../types/types";

export default function MealImage({ imageSource }: Provision) {
  return (
    <Image
      src={imageSource}
      width={500}
      height={500}
      alt="Picture of the dish"
    />
  );
}
