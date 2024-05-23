export type Provision = {
	id: string;
	name: string;
	description: string;
	imageSource: string;
	price: number;
	category: string;
};

// Spelling mistake here, but want to use same type as the server

export type Dish = Provision & {
	cousine: string;
};

export type Drink = Provision & {
};

export type OrderType = {
	id: string;
	email: string;
	dish: Dish | null;
	drinks: Drink[];
	count: number;
	date: Date;
};

// Used chatGPT to write types because I'm lazy

type Meal = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

export type MealsResponse = {
  meals: Meal[];
};

export type Image = {
  imageSource: string;
}

export type DishDescription = {
  title: string;
  description: string;
}

export type GenerateNewDishType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}