import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoryArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoryArray);