import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoryArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoryArray);

export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoryArray) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoryArray);

export const fetchCategoriesFail = (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL,error);