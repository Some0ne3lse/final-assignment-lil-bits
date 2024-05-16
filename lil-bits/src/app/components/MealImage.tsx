import { Image } from "../types/types";

export default function MealImage({ imageSource }: Image) {
  return (
    <img
      src={imageSource}
      width={500}
      height={500}
      alt="A picture of the current dish"
    />
  );
}
