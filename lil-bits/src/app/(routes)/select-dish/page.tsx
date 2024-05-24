"use client";
import { api } from "@/app/api/api";
import GenerateNewDish from "@/app/components/GenerateNewdish";
import Header from "@/app/components/Header";
import MealDescription from "@/app/components/MealDescription";
import MealImage from "@/app/components/MealImage";
import SubmitDish from "@/app/components/SubmitDish";
import { useOrder } from "@/app/context/OrderContext";
import { Dish } from "@/app/types/types";

import { useCallback, useEffect } from "react";

export default function SelectDish() {
  const { menuItems } = useOrder();
  const { dish, setDish } = useOrder();
  // ASK ABOUT ID, PRICE AND IMAGESOURCE NOT BEING THERE!

  const mutatePreviousOrderToDish = () => {
    if (menuItems && menuItems.dish) {
      const dishCopy: Dish = { ...menuItems.dish };
      setDish(dishCopy);
    } else {
      //TODO change to div warn
      alert("No dish");
    }
  };

  const getRandomOrderFromServer = useCallback(async () => {
    const fetchRandomOrder = await api.getRandomOrder();
    // TODO: handle if meal api is down
    // setRandomDish(fetchRandomOrder);
    setDish({
      id: fetchRandomOrder.meals[0].idMeal,
      price: 3000,
      name: fetchRandomOrder.meals[0].strMeal,
      description: fetchRandomOrder.meals[0].strInstructions,
      imageSource: fetchRandomOrder.meals[0].strMealThumb,
      category: fetchRandomOrder.meals[0].strCategory,
      cousine: fetchRandomOrder.meals[0].strArea,
    });
    // TODO: Find and set up eslint rule to make warning when deps items are missing
  }, [setDish]);

  // Ask teach if dependency is ok empty
  useEffect(() => {
    if (!menuItems) {
      getRandomOrderFromServer();
    } else {
      mutatePreviousOrderToDish();
    }
  }, []);

  if (!dish) {
    return null;
  }
  return (
    <main>
      <Header />
      <MealImage imageSource={dish.imageSource} />
      <MealDescription
        title={dish.name}
        description={dish.description}
        price={dish.price}
      />
      <GenerateNewDish onClick={getRandomOrderFromServer} />
      <SubmitDish dish={dish.name} />
    </main>
  );
}
