"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Receipt from "@/app/components/Receipt";
import ReturnToHomepage from "@/app/components/ReturnToHomepage";
import { useOrder } from "@/app/context/OrderContext";

export default function ReceiptScreen() {
  const { setMenuItems } = useOrder();
  const resetForm = () => {
    setMenuItems(null);
  };
  return (
    <main>
      <Header />
      <Receipt />
      <ReturnToHomepage text="Make a new order" onClick={resetForm} />
      <Footer />
    </main>
  );
}
