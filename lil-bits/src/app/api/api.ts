import { MealsResponse, OrderType } from "../types/types";

const getOrders = async (): Promise<OrderType[]> => {
  const res = await fetch(`http://localhost:3001/api/orders`)

  if (!res.ok) {
		throw new Error("Failed to fetch data");    
	}
  const response = await res.json()
  return response
}

const getRandomOrder = async (): Promise<MealsResponse> => {
  const res = await fetch('https://themealdb.com/api/json/v1/1/random.php')

  if (!res.ok) {
		throw new Error("Failed to fetch data");    
  }
  const response = await res.json()
  return response
}

export const api = {
  getOrders,
  getRandomOrder,
}

