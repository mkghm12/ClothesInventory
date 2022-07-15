import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.util";
import { signInSuccess,signInFailed,signUpFailed,signOutFailed,signOutSuccess } from "./user.action";

export type UserState = {
    currentUser: UserData| null;
    isLoading: boolean;
    error: Error| null;
}

export const INITIAL_STATE:UserState = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const userReducer = (state = INITIAL_STATE, action={} as AnyAction) => {
    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload
        }
    }
    if (signInFailed.match(action)||signOutFailed.match(action)|| signUpFailed.match(action)) {
        return {
            ...state,
            error: action.payload
        }
    }
    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null
        }
    }

    return state;
    // switch (action.type) {
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: payload
    //         }
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //         return {
    //             ...state,
    //             error: payload
    //         }
    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: null
    //         }
    //     default:
    //         return state;
    // }
}
