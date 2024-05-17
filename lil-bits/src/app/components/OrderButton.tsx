import LinkButton from "./LinkButton";

export default function OrderButton() {
  return (
    <div>
      <p>Select your dish!</p>
      <LinkButton link="/select-dish" text="Order" />
    </div>
  );
}
