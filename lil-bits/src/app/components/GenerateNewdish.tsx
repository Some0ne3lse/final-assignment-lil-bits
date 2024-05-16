import { GenerateNewDishType } from "../types/types";

export default function GenerateNewDish({ onClick }: GenerateNewDishType) {
  return (
    <>
      <button onClick={onClick}>Generate new dish</button>
    </>
  );
}
