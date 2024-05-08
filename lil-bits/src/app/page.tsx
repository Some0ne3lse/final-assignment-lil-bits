import Header from "./components/Header";
import Order from "./components/Order";
import TheCarousel from "./components/TheCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <TheCarousel />
      <Order />
    </main>
  );
}
