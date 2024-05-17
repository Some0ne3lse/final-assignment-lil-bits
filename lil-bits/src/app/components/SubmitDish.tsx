type SubmitDishType = {
  dish: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SubmitDish({ dish, onClick }: SubmitDishType) {
  return (
    <>
      <div>You current order is: {dish}</div>
      <button onClick={onClick}>Continue to drink selection</button>
    </>
  );
}
