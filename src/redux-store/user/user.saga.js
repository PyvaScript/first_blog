import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types.js';

import { signInSuccess, signInFailed } from './user.action.js';

import { getCurrentUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
    try {
        const userSnapshot=yield call(createUserDocumentFromAuth, userAuth, additionalInformation);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* isUserAuthenticated() {
    try {
        const userAuth=yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* userSagas() {
    yield all([call(onCheckUserSession)]);
};







// import { takeLatest, all, call, put } from 'redux-saga/effects';

// import { USER_ACTION_TYPES } from './user.types.js';

// import { signInFailed, signInSuccess } from './user.action.js';

// import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase/firebase.utils.js';

// export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
//     try {
//         const userSnapshot=yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
//         console.log(
//             'USER_SNAPSHOT'
//         )
//         console.log(userSnapshot);
//         console.log('TYPE OF USERSNAPSHOT');
//         console.log(typeof userSnapshot);
//         console.log(userSnapshot.val);
//     } catch(error) {
//         console.log('getSnapshotFromUserAuth failed');
//         yield put(signInFailed(error));
//     };
// };

// export function* isUserAuthenticated() {
//     console.log('isUserAuthenticated');
//     try {

//         const userAuth=yield call(getCurrentUser);
//         if(!userAuth) return;
//         yield call(getSnapshotFromUserAuth, userAuth);
//     } catch(error) {
//         console.log('isUserAuthenticated failed');
//         yield put(signInFailed(error));
//     };
// };

// export function* onCheckUserSession() {
//     console.log('onCheckUserSession');
//     yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
// };

// export function* userSagas() {
//     yield all([call(onCheckUserSession)]);
// };
