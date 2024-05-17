"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Dish, Drink, OrderType } from "../types/types";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextType = {
  menuItems: OrderType | null;
  setMenuItems: Dispatch<SetStateAction<OrderType | null>>;
  dish: Dish | null;
  setDish: Dispatch<SetStateAction<Dish | null>>;
  drinks: Drink[];
  setDrinks: Dispatch<SetStateAction<Drink[]>>;
};

const OrderContext = createContext<OrderContextType>({
  menuItems: null,
  setMenuItems: () => {},
  dish: null,
  setDish: () => {},
  drinks: [],
  setDrinks: () => [],
});

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [menuItems, setMenuItems] = useState<OrderType | null>(null);
  const [dish, setDish] = useState<Dish | null>(null);
  const [drinks, setDrinks] = useState<Drink[]>([]);

  return (
    <OrderContext.Provider
      value={{
        menuItems,
        setMenuItems,
        dish,
        setDish,
        drinks,
        setDrinks,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
