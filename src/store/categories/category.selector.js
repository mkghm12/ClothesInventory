import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategory = createSelector(
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
        }, {});
    }
);

export const selectCategoryDataIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);