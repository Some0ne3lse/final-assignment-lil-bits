"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { OrderType } from "../types/types";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextType = {
  menuItems: OrderType | null;
  setMenuItems: Dispatch<SetStateAction<OrderType | null>>;
};

const OrderContext = createContext<OrderContextType>({
  menuItems: null,
  setMenuItems: () => {},
});

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [menuItems, setMenuItems] = useState<OrderType | null>(null);

  return (
    <OrderContext.Provider
      value={{
        menuItems,
        setMenuItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
