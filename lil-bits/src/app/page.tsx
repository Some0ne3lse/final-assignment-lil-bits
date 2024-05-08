import Header from "./components/Header";
import Order from "./components/Order";
import SearchForEmail from "./components/SearchForEmail";
import TheCarousel from "./components/TheCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <TheCarousel />
      <Order />
      <SearchForEmail />
    </main>
  );
}
