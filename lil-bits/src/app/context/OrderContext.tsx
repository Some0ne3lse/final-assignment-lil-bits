"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Dish, OrderType } from "../types/types";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextType = {
  menuItems: OrderType | null;
  setMenuItems: Dispatch<SetStateAction<OrderType | null>>;
  dish: Dish | null;
  setDish: Dispatch<SetStateAction<Dish | null>>;
};

const OrderContext = createContext<OrderContextType>({
  menuItems: null,
  setMenuItems: () => {},
  dish: null,
  setDish: () => {},
});

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [menuItems, setMenuItems] = useState<OrderType | null>(null);
  const [dish, setDish] = useState<Dish | null>(null);

  return (
    <OrderContext.Provider
      value={{
        menuItems,
        setMenuItems,
        dish,
        setDish,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
