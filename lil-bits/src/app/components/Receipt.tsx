"use client";
import { api } from "@/app/api/api";
import { useOrder } from "@/app/context/OrderContext";
import { OrderType } from "@/app/types/types";
import { useCallback, useEffect, useState } from "react";
import ReturnToHomepage from "./ReturnToHomepage";

export default function Receipt() {
  const { menuItems, setMenuItems } = useOrder();
  const [receipt, setReceipt] = useState<OrderType | null>(menuItems);
  const [error, setError] = useState<string | null>(null);

  const getOrdersFromServer = useCallback(async (email: string) => {
    const fetchOrders = await api.getOrders(email).catch((error) => {
      setError(
        "ERROR: '" +
          error.message +
          "' Please check your internet connection or contact customer service"
      );
    });
    if (fetchOrders) {
      setReceipt(fetchOrders);
    }
  }, []);

  useEffect(() => {
    if (menuItems) {
      getOrdersFromServer(menuItems?.email);
    } else {
      setError("Something went wrong. Please try again");
    }
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const resetForm = () => {
    setMenuItems(null);
    setReceipt(null);
  };

  if (
    receipt?.date &&
    receipt?.email &&
    receipt.dish &&
    receipt.drinks &&
    receipt.price &&
    receipt.count
  ) {
    return (
      <>
        <div>{formatDate(receipt.date)}</div>
        <div>{receipt?.email}</div>
        <div>{receipt.dish.name}</div>
        <div>
          {receipt.drinks.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
        <div>{receipt.count}</div>
        <div>{receipt.price}</div>
      </>
    );
  } else {
    return (
      <>
        <div>Something went wrong. Please try again</div>
        <ReturnToHomepage onClick={resetForm} text="Start over" />
      </>
    );
  }
}