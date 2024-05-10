import Header from "./components/Header";
import Order from "./components/Order";
import SearchForEmail from "./components/SearchForEmail";
import TheCarousel from "./components/TheCarousel";
import { OrderProvider } from "./context/OrderContext";

export default function Home() {
  return (
    <main>
      <OrderProvider>
        <Header />
        <TheCarousel />
        <Order />
        <SearchForEmail />
      </OrderProvider>
    </main>
  );
}
