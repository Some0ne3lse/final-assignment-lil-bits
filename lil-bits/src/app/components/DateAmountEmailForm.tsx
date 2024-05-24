"use client";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import AmountPicker from "./AmountPicker";
import { useOrder } from "../context/OrderContext";

type FormFieldsType = {
  email: String;
  date: Date;
  count: number;
};

export default function DateAmountEmailForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormFieldsType>();
  const {
    setOrderDate,
    setOrderAmount,
    setOrderEmail,
    menuItems,
    setMenuItems,
    dish,
    drinks,
    orderDate,
    orderAmount,
    orderEmail,
  } = useOrder();
  const [date, setDate] = useState<Date | null>(null);
  const [count, setCount] = useState<number>(1);
  const [invalidAmount, setInvalidAmount] = useState<String | null>(null);
  const [infoSubmitted, setInfoSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (menuItems) {
      const emailDate = new Date(menuItems.date);
      setDate(emailDate);
      setCount(menuItems.count);
      console.log(emailDate);
    }
  }, []);

  useEffect(() => {
    if (infoSubmitted) {
      if (orderDate && orderAmount && orderEmail && dish && drinks) {
        setMenuItems({
          ...menuItems,
          id: "test",
          email: orderEmail,
          dish: dish,
          drinks: drinks,
          count: orderAmount,
          date: orderDate,
        });
        console.log(menuItems);
      } else {
        alert("Missing object");
        setInfoSubmitted(false);
      }
    }
  }, [infoSubmitted]);

  useEffect(() => {
    if (infoSubmitted) {
      console.log(menuItems);
    }
  }, [menuItems]);

  const onSubmitData = (data: FormFieldsType) => {
    setOrderDate(data.date);
    setOrderAmount(data.count);
    setOrderEmail(data.email);
    setInfoSubmitted(true);
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
    if (count <= 1) {
      setInvalidAmount("Please select an amount higher than 0");
    } else {
      setCount(count - 1);
      setInvalidAmount(null);
    }
  };

  const increaseAmount = () => {
    if (count >= 10) {
      setInvalidAmount("Please select and amount lower than 11");
    } else {
      setCount(count + 1);
      setInvalidAmount(null);
    }
  };

  let buttonName = "Submit order";

  if (menuItems) {
    buttonName = "Update order";
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          data.count = count;
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
          name="count"
          render={() => (
            <AmountPicker
              count={count}
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

        <button type="submit">{buttonName}</button>
      </form>
    </>
  );
}
