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

  const drinksPrice = drinks.map((drink) => drink.price);
  const totalDrinksPrice = drinksPrice.reduce((acc, curr) => acc + curr);

  return (
    <>
      {drinks.map((drink, index) => (
        <div key={index}>{drink.name}</div>
      ))}
      {drinks && <p>Price: {totalDrinksPrice}</p>}
      <LinkButton link="/order-screen" text="Continue to Order screen" />
    </>
  );
}
