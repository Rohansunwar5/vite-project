import * as types from "../actionsTypes/authActionTypes"

const initalState = {
    isAuthenticated: false,
    user: {},
};

const authReducer = (state = initalState, action ) => {
    switch(action.type){
        case types.SIGN_IN:
            return {
                ...state ,
                isAuthenticated: true,
                user: action.payload,
            }
        case types.SIGN_OUT:
            return {
                ...state ,
                isAuthenticated: false,
                user: {},
            }
        default:
            return state;
    }
};

export default authReducer;