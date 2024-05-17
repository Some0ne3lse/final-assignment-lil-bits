import Header from "./components/Header";
import OrderButton from "./components/OrderButton";
import SearchForEmail from "./components/SearchForEmail";
import TheCarousel from "./components/TheCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <TheCarousel />
      <OrderButton />
      <SearchForEmail />
    </main>
  );
}
