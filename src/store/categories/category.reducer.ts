import { AnyAction } from "redux";
import { fetchCategoriesFail, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";
import { Category } from "./category.types";

export type Initial_Categories = {
    readonly categories: Category[];
    readonly error: Error | null;
    readonly isLoading: boolean;
}

const INITIAL_STATE: Initial_Categories = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoryReducer = (state = INITIAL_STATE, action = {} as AnyAction):Initial_Categories => {
  if (fetchCategoriesStart.match(action)) {
    return {
        ...state,
        isLoading: true,
      };
  }
  if(fetchCategoriesSuccess.match(action)){
    return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
  }

  if(fetchCategoriesFail.match(action)){
    return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
  }

  return state;
//   switch (action.type) {
//     case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
//         return {
//             ...state,
//             isLoading: true,
//           };
//     case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return {
//         ...state,
//         categories: action.payload,
//         isLoading: false,
//       };
//     case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
};
