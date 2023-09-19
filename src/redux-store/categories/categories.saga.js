import { takeLatest, all, call, put } from 'redux-saga/effects';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action.js';
import { CATEGORIES_ACTION_TYPES } from './categories.types.js';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray=yield call(getCategoriesAndDocuments, 'categories');
        // To dispatch in redux-saga use put
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch(error) {
        yield put(fetchCategoriesFailed(error));
    };
};

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSagas() {
    yield all([call(onFetchCategories)]);
};
