import { createSelector } from "reselect";
import { RootState } from "../store";
import { Initial_Categories } from "./category.reducer";
import { CategoryMap } from "./category.types";


const selectCategoryReducer = (state:RootState):Initial_Categories => state.categories;

export const selectCategory= createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories;
    })

export const categoryDataSelector = createSelector(
    [selectCategory],
    (categories) => {
        return categories.reduce((accumulatorObject, category) => {
            const { title, items } = category;
            accumulatorObject[title.toLowerCase()] = items;
            return accumulatorObject;
        }, {} as CategoryMap);
    }
);

export const selectCategoryDataIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);