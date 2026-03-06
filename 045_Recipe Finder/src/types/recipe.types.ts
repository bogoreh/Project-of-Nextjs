export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  summary?: string;
  instructions?: string;
  extendedIngredients?: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface SearchFormData {
  query: string;
  cuisine?: string;
  maxReadyTime?: number;
  diet?: string;
}

export interface ValidationErrors {
  query?: string;
  maxReadyTime?: string;
}