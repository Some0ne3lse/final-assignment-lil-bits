"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { api } from "../api/api";
import { OrderType } from "../types/types";
import { useRouter } from "next/navigation";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextType = {
  getMenuFromServer: (email: string) => Promise<void>;
  menuItems: {};
  setMenuItems: Dispatch<SetStateAction<{}>>;
};

const OrderContext = createContext({} as OrderContextType);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [menuItems, setMenuItems] = useState({});
  const router = useRouter();

  const findMealByEmail = (array: OrderType[], email: string) => {
    return array.find((object: OrderType) => object.email === email);
  };

  const getMealFromServer = async (email: string) => {
    const fetchedMeal = await api.getOrders();
    let theMeal = findMealByEmail(fetchedMeal, email);
    if (theMeal === undefined) {
      alert("No meal saved on this email");
    } else {
      setMenuItems(theMeal);
      router.push("/select-dish");
    }
  };

  return (
    <OrderContext.Provider
      value={{ getMenuFromServer: getMealFromServer, menuItems, setMenuItems }}
    >
      {children}
    </OrderContext.Provider>
  );
}
