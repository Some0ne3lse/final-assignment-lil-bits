"use client";
import { useState } from "react";
import { useOrder } from "../context/OrderContext";

export default function SearchForEmail() {
  const [email, setEmail] = useState("");
  const { getMenuFromServer, menuItems } = useOrder();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = () => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(email)) {
      getMenuFromServer(email);
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
