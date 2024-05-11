"use client";
import { useEffect, useState } from "react";
import { useOrder } from "../context/OrderContext";

export default function MealDescription() {
  const { menuItems } = useOrder();

  useEffect(() => {
    if (menuItems === null) {
      alert("test");
    }
  }, []);

  console.log(menuItems);
  return <div></div>;
}
