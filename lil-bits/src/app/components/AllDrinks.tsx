import { useCallback, useEffect, useState } from "react";
import { api } from "../api/api";
import { DrinkApiType, DrinksResponse } from "../types/drinkTypes";
import styles from "../styles/AllDrinks.module.css";
import { useOrder } from "../context/OrderContext";
import ReturnToHomepage from "./ReturnToHomepage";

export default function AllDrinks() {
  const { drinks, setDrinks, menuItems, setMenuItems } = useOrder();
  const [error, setError] = useState<string | null>();

  const [allDrinksFromServer, setAllDrinksFromServer] =
    useState<DrinksResponse | null>(null);

  const getAllDrinksFromServer = useCallback(async () => {
    try {
      const fetchAllDrinks = await api.getAllDrinks();
      setAllDrinksFromServer(fetchAllDrinks);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message + " Please contact customer support");
      } else {
        setError("Something went wrong. Please contact customer support");
      }
    }
  }, [setAllDrinksFromServer]);

  useEffect(() => {
    getAllDrinksFromServer();
  }, []);

  const mutatePreviousOrderToDrinks = () => {
    if (menuItems) {
      setDrinks([...menuItems.drinks]);
    } else {
      setDrinks([]);
      setError("No drinks found in this order");
    }
  };

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

  const resetForm = () => {
    setMenuItems(null);
  };

  if (!allDrinksFromServer || error) {
    return (
      <>
        <div>{error}</div>
        <ReturnToHomepage text="Start over" onClick={resetForm} />
      </>
    );
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
