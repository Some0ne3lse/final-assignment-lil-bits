"use client";

import { DishDescription } from "../types/types";

export default function MealDescription({
  title,
  description,
}: DishDescription) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}
