import { useOrder } from "../context/OrderContext";
import LinkButton from "./LinkButton";

type SubmitDrinkType = {
  drinks: string;
};

export default function SubmitDrinks() {
  const { drinks } = useOrder();

  if (drinks.length === 0) {
    return <div>No drinks selected</div>;
  }

  return (
    <>
      {drinks.map((drink, index) => (
        <div key={index}>{drink.name}</div>
      ))}
      <LinkButton link="/order-screen" text="Continue to Order screen" />
    </>
  );
}
