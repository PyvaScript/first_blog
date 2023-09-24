import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types.js';
import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutSuccess,
    signOutFailed,
} from './user.action.js';

import { 
    createUserDocumentFromAuth,
    getCurrentUser,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    SignOutUser,
} from '../../utils/firebase/firebase.utils.js';

export function* getUserSnapshotFromAuth(userAuth, additionalInformation) {
    try {
        const userSnapshot=yield call(createUserDocumentFromAuth, userAuth, additionalInformation);
        // The code below destructures userSnapshot to place values in the expected format for signInSuccess
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* signInWithGoogle() {
    try {
        // We don't need curved braces to use the `signInWithGooglePopup` function. The call() function takes any arguments to be passed 
        // to the function being called as subsiquent 
        // arguments after the function has been called. Arguments are to be separated by commas.
        const { user }=yield call(signInWithGooglePopup);
        yield call(getUserSnapshotFromAuth, user);
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* signInWithEmail({ payload: { email, password }}) {
    try {
        const { user }=yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getUserSnapshotFromAuth, user);
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* signUp({ payload: { email, password, displayName }}) {
    try {
        const { user }=yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user, { displayName }));
    } catch(error) {
        yield put(signUpFailed(error));
    };
};

export function* signInAfterSignUp({ payload: {user, additionalInformation }}) {
    yield call(getUserSnapshotFromAuth, user, additionalInformation);
};

export function* signOut() {
    try {
        yield call(SignOutUser);
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailed(error));
    };
};

export function* isUserAuthenticated() {
    try {
        const userAuth=yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getUserSnapshotFromAuth, userAuth);
    } catch(error) {
        yield put(signInFailed(error));
    };
};

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
};

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
};

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
};

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
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
