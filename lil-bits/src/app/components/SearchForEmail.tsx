"use client";
import { useEffect, useRef, useState } from "react";
import { useOrder } from "../context/OrderContext";
import { useRouter } from "next/navigation";
import { OrderType } from "../types/types";

export default function SearchForEmail() {
  const [email, setEmail] = useState("");
  const { getOrdersFromServer, setMenuItems, menuItems, allOrders } =
    useOrder();
  const router = useRouter();

  useEffect(() => {
    getOrdersFromServer();
  }, []);

  const findMealByEmail = (array: OrderType[], email: string) => {
    return array.find((object: OrderType) => object.email === email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = () => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(email)) {
      const theMeal = findMealByEmail(allOrders, email);
      if (theMeal) {
        setMenuItems(theMeal);
        router.push("/select-dish");
      } else {
        alert("No orders found for this email");
      }
    } else {
      alert("Incorrect email");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}
