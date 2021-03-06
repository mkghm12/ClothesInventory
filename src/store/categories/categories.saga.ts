import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { getDocumentsAndDataFromCollection } from '../../utils/firebase/firebase.util';
import { fetchCategoriesFail, fetchCategoriesSuccess } from './category.action';
import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getDocumentsAndDataFromCollection, 'categories');
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFail(error as Error));
    }
}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])
} 