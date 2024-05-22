"use client";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import AmountPicker from "./AmountPicker";

type FormFieldsType = {
  email: string;
  date: Date;
  amount: number;
};

export default function DateAmountEmailForm({ setDebug }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormFieldsType>();
  const [date, setDate] = useState<Date | null>(null);
  const [amount, setAmount] = useState<number>(1);
  const [invalidAmount, setInvalidAmount] = useState<String | null>(null);

  const onSubmitData = (data: FormFieldsType) => {
    setDebug(data);
    console.log(data);
  };

  const handleChange = (dateChange: Date) => {
    setValue("date", dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  };

  const isWeekDay = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const decreaseAmount = () => {
    if (amount <= 1) {
      setInvalidAmount("Please select an amount higher than 0");
    } else {
      setAmount(amount - 1);
      setInvalidAmount(null);
    }
  };

  const increaseAmount = () => {
    if (amount >= 10) {
      setInvalidAmount("Please select and amount lower than 11");
    } else {
      setAmount(amount + 1);
      setInvalidAmount(null);
    }
  };

  //Ask about name instead of id
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          data.amount = amount;
          onSubmitData(data);
        })}
        noValidate
      >
        <Controller
          name="date"
          control={control}
          rules={{ required: { value: true, message: "Date is required" } }}
          render={() => (
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              minDate={new Date()}
              isClearable
              filterDate={isWeekDay}
              filterTime={filterPassedTime}
              disabledKeyboardNavigation
              minTime={new Date(0, 0, 0, 16, 0)}
              maxTime={new Date(0, 0, 0, 23, 0)}
              showTimeSelect
              dateFormat="dd/MM/yyyy"
              required
              selected={date}
              placeholderText="Select date"
              onChange={handleChange}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
          )}
        />
        {errors.date && <div>{errors.date.message}</div>}
        <Controller
          control={control}
          name="amount"
          render={() => (
            <AmountPicker
              amount={amount}
              decreaseAmount={decreaseAmount}
              increaseAmount={increaseAmount}
              invalidAmount={invalidAmount}
            />
          )}
        />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}

        <button type="submit">Edit log</button>
      </form>
    </>
  );
}
