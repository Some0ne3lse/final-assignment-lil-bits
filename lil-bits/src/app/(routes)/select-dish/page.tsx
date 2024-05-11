import Header from "@/app/components/Header";
import MealDescription from "@/app/components/MealDescription";
import { OrderProvider } from "@/app/context/OrderContext";

export default function SelectDish() {
  return (
    <main>
      <Header />
      <MealDescription />
    </main>
  );
}
