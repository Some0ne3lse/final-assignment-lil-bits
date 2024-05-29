import LinkButton from "./LinkButton";

export default function OrderButton() {
  return (
    <div>
      <p>Go to our order screen!</p>
      <LinkButton link="/select-dish" text="Order" />
    </div>
  );
}
