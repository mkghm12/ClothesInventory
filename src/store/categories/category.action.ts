import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.util";
import { Category, CATEGORY_ACTION_TYPES } from "./category.types";

export type FETCH_CATEGORIES_START=Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FETCH_CATEGORIES_SUCCESS = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>;
export type FETCH_CATEGORIES_FAIL = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL,Error>;
export type SET_CATEGORIES = ActionWithPayload<CATEGORY_ACTION_TYPES.SET_CATEGORIES,Category[]>;

export type CategoryAction = SET_CATEGORIES|FETCH_CATEGORIES_START|FETCH_CATEGORIES_SUCCESS|FETCH_CATEGORIES_FAIL;

export const setCategories = withMatcher((categoryArray:Category[]) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoryArray));

export const fetchCategoriesStart = withMatcher(():FETCH_CATEGORIES_START => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoryArray: Category[]): FETCH_CATEGORIES_SUCCESS => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoryArray));

export const fetchCategoriesFail = withMatcher((error:Error):FETCH_CATEGORIES_FAIL => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL,error));