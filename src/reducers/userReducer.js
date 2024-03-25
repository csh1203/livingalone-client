import { SET_USER_PK } from '../actions/userActions';

const initialState = {
    userPK: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PK:
            return {
                ...state,
                userPK: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
