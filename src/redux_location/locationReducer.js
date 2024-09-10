import { SET_LOCATION } from './actions';

const initialState = {
    location: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};

export default locationReducer;
