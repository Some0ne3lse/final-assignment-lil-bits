"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../api/api";
import { OrderType } from "../types/types";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderContextType = {
  getOrdersFromServer: () => Promise<void>;
  menuItems: OrderType;
  setMenuItems: Dispatch<SetStateAction<OrderType>>;
  allOrders: OrderType[];
};

const OrderContext = createContext({} as OrderContextType);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [menuItems, setMenuItems] = useState<OrderType>({} as OrderType);
  const [allOrders, setAllOrders] = useState<OrderType[]>([]);

  const getOrdersFromServer = useCallback(async () => {
    const fetchOrders = await api.getOrders();
    setAllOrders(fetchOrders);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        getOrdersFromServer: getOrdersFromServer,
        menuItems,
        setMenuItems,
        allOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
