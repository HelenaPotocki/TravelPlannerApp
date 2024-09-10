import { 
    CREATE_LOCATION_REQUEST, 
    CREATE_LOCATION_SUCCESS, 
    CREATE_LOCATION_FAILURE 
} from './actions';

const initialState = {
    locationId: null,
    loading: false,
    error: null,
};

const selectedLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LOCATION_REQUEST:
            return {
                ...state,
                loading: true,  
                error: null,    
            };
        case CREATE_LOCATION_SUCCESS:
            return {
                ...state,
                locationId: action.payload,  
                loading: false,  
            };
        case CREATE_LOCATION_FAILURE:
            return {
                ...state,
                loading: false,  
                error: action.payload,  
            };
        default:
            return state;
    }
};

export default selectedLocationReducer;
