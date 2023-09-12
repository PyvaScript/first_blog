import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action.js';

import { CATEGORIES_ACTION_TYPES } from './categories.types.js';


export function* fetchCategoriesAsync() {

    try {
        const categoriesArray=yield call(getCategoriesAndDocuments, 'categories');
        // Redux-saga uses the dispatch equivalent of put
        
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch(error) {
        yield put(fetchCategoriesFailed(error));
    };
};

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
};
