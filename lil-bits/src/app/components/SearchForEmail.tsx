"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useOrder } from "../context/OrderContext";
import { useRouter } from "next/navigation";
import { OrderType } from "../types/types";
import { api } from "../api/api";

// CHANGE TO FORM!

export default function SearchForEmail() {
  const [email, setEmail] = useState("");
  const { setMenuItems } = useOrder();
  const router = useRouter();

  const getOrdersFromServer = useCallback(async (email: string) => {
    const fetchOrders = await api.getOrders(email);
    if (fetchOrders) {
      setMenuItems(fetchOrders);
      router.push("/select-dish");
    } else {
      // TODO: Change div with red text
      alert("No email found");
    }
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = () => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(email)) {
      getOrdersFromServer(email);
    } else {
      alert("Incorrect email");
    }
  };

  //TODO change to form

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
