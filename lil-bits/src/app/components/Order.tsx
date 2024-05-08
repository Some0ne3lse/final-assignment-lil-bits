import LinkButton from "./LinkButton";

export default function Order() {
  return (
    <div>
      <p>Select your dish!</p>
      <LinkButton link="/select-dish" text="Order" />
    </div>
  );
}
