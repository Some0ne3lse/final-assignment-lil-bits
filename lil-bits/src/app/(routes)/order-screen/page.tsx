"use client";

import DateAmountEmailForm from "@/app/components/DateAmountEmailForm";
import FormDebug from "@/app/components/FormDebug";
import Header from "@/app/components/Header";
import { useState } from "react";

export default function OrderScreen() {
  const [debug, setDebug] = useState();
  return (
    <main>
      <Header />
      <DateAmountEmailForm setDebug={setDebug} />
      {debug && <FormDebug data={debug} />}
    </main>
  );
}
