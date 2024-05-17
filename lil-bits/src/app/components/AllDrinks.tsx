import { useCallback, useEffect, useState } from "react";
import { api } from "../api/api";
import { DrinkApiType, DrinksResponse } from "../types/drinkTypes";
import styles from "../styles/AllDrinks.module.css";
import { useOrder } from "../context/OrderContext";

export default function AllDrinks() {
  const { drinks, setDrinks, menuItems } = useOrder();

  const mutatePreviousOrderToDrinks = () => {
    if (menuItems) {
      setDrinks([...menuItems.drinks]);
    } else {
      //TODO change to div warn
      alert("No drink");
    }
  };

  const [allDrinksFromServer, setAllDrinksFromServer] =
    useState<DrinksResponse | null>(null);
  const getAllDrinksFromServer = useCallback(async () => {
    const fetchAllDrinks = await api.getAllDrinks();
    setAllDrinksFromServer(fetchAllDrinks);
  }, [setAllDrinksFromServer]);

  useEffect(() => {
    getAllDrinksFromServer();
  }, []);

  const selectDrink = (event: DrinkApiType) => {
    setDrinks((drinks) => [
      ...drinks,
      {
        id: event.idDrink,
        name: event.strDrink,
        description: event.strInstructions,
        imageSource: event.strDrinkThumb,
        price: 1000,
        category: event.strCategory,
      },
    ]);
  };

  useEffect(() => {
    if (menuItems) {
      mutatePreviousOrderToDrinks();
    }
  }, []);

  useEffect(() => {
    console.log(drinks);
  }, [drinks]);

  if (!allDrinksFromServer) {
    return null;
  }
  return (
    <div className={styles["drinks-container"]}>
      {allDrinksFromServer.drinks.map((item, index) => (
        <div
          key={index}
          className={styles["drinks-content"]}
          onClick={() => selectDrink(item)}
        >
          <img src={item.strDrinkThumb} width={100} height={100} />
          <p className={styles["drink-name"]}>{item.strDrink}</p>
        </div>
      ))}
    </div>
  );
}
