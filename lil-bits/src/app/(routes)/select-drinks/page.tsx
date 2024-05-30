"use client";
import AllDrinks from "@/app/components/AllDrinks";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SubmitDrinks from "@/app/components/SubmitDrinks";

export default function SelectDrinks() {
  return (
    <main>
      <Header />
      <AllDrinks />
      <SubmitDrinks />
      <Footer />
    </main>
  );
}
