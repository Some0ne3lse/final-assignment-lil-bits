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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getOrdersFromServer = useCallback(async (email: string) => {
    const fetchOrders = await api.getOrders(email).catch((error) => {
      setError(
        "ERROR: '" +
          error.message +
          "' Please check your internet connection or contact customer service"
      );
    });
    if (fetchOrders) {
      setMenuItems(fetchOrders);
      router.push("/select-dish");
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
      setError("No email found");
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
      {error && <div>{error}</div>}
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}
