export enum CATEGORY_ACTION_TYPES {
  SET_CATEGORIES = "Category/SET_CATEGORIES",
  FETCH_CATEGORIES_START = "Category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "Category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL = "Category/FETCH_CATEGORIES_FAIL",
}

export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type Category = {
    title: string;
    imageUrl: string;
    items: CategoryItem[];   
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}
