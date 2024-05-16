"use client";
import { api } from "@/app/api/api";
import Header from "@/app/components/Header";
import MealDescription from "@/app/components/MealDescription";
import { OrderProvider, useOrder } from "@/app/context/OrderContext";
import { Dish, MealsResponse, Provision } from "@/app/types/types";
import { use, useCallback, useEffect, useState } from "react";

export default function SelectDish() {
  const { menuItems, setMenuItems } = useOrder();
  const [dish, setDish] = useState<Dish | null>(null);

  // ASK ABOUT ID, PRICE AND IMAGESOURCE NOT BEING THERE!

  const mutatePreviousOrderToDish = () => {
    const dishCopy = { ...menuItems.dish };
    console.log(dishCopy);
    setDish({ ...dishCopy });
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
  }, []);

  useEffect(() => {
    if (Object.keys(menuItems).length === 0) {
      getRandomOrderFromServer();
    } else {
      mutatePreviousOrderToDish();
    }
  }, []);

  useEffect(() => {
    console.log(dish);
  }, [dish]);

  if (!dish) {
    return null;
  }
  return (
    <main>
      <Header />
      <MealDescription />
      {dish && (
        <>
          <div>{dish?.name}</div>
          <img src={dish.imageSource} alt="" />
        </>
      )}
    </main>
  );
}
