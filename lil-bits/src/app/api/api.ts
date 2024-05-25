import { DrinksResponse } from "../types/drinkTypes";
import { MealsResponse, OrderType } from "../types/types";

const getOrders = async (email: string): Promise<OrderType> => {
  const res = await fetch(`http://localhost:3001/api/order/${email}`)

  if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
  const response = await res.json()
  return response
}

const postOrder = async (order: OrderType): Promise<OrderType> => {
  const res = await fetch('http://localhost:3001/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
  if (!res.ok) {
    throw new Error('Failed to post data')
  }

  const response = await res.json()
  console.log(response)
  if (response.success === false){
    throw new Error(response.error)
  }
  
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

const getAllDrinks = async (): Promise<DrinksResponse> => {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const response = await res.json()
  return response
}

export const api = {
  getOrders,
  postOrder,
  getRandomOrder,
  getAllDrinks,
}

