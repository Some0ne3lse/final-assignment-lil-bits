import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type AmountPickerType = {
  decreaseAmount: () => void;
  increaseAmount: () => void;
  invalidAmount: string;
  amount: number;
};

export default function AmountPicker({
  decreaseAmount,
  increaseAmount,
  invalidAmount,
  amount,
}: AmountPickerType) {
  return (
    <>
      <h2>Select amount of people</h2>
      <FontAwesomeIcon icon={faAngleDown} onClick={decreaseAmount} />
      <div>{amount}</div>
      <FontAwesomeIcon icon={faAngleUp} onClick={increaseAmount} />
      {invalidAmount && <div>{invalidAmount}</div>}
    </>
  );
}
