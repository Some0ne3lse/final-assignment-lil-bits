import { useOrder } from "../context/OrderContext";

export default function OrderReceipt() {
  const { menuItems } = useOrder();
  return (
    <>
      <p>{menuItems?.date.toString()}</p>
    </>
  );
}
