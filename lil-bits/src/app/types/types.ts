export type Provision = {
	id: string;
	name: string;
	description: string;
	imageSource: string;
	price: number;
	category: string;
};

export type Dish = Provision & {
	cuisine: string;
};

export type Drink = Provision & {
	brewer: string;
};

export type OrderType = {
	id: number;
	email: string;
	dish: Dish;
	drinks: Drink[];
	count: number;
	date: Date;
};