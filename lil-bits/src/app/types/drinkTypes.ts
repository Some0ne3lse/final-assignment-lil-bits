export type DrinkApiType = {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strCategory: string;
}

export type DrinksResponse = {
  drinks: DrinkApiType[];
}