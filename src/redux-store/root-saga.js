import { all, call } from 'redux-saga/effects';

import { categoriesSagas } from './categories/categories.saga.js';
import { userSagas } from './user/user.saga.js';

export function* rootSaga() {
    yield all([call(categoriesSagas), call(userSagas)]);
};
