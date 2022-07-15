import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "Cart/SET_CART_ITEM",
  SET_IS_CART_OPEN = "Cart/SET_IS_CART_OPEN",
}

export type CartItem =  CategoryItem& {
    quantity: number;
};
