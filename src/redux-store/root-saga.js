import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/categories.saga.js';
import { userSagas } from './user/user.saga.js';

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSagas)]);
};
