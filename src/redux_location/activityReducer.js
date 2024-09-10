// activityReducer.js
import {
    CREATE_ACTIVITY, 
    CREATE_ACTIVITY_SUCCESS, 
    CREATE_ACTIVITY_FAILURE,
    SET_CURRENT_ACTIVITY,
    CLEAR_CURRENT_ACTIVITY,
    FETCH_ACTIVITIES 
} from './actions';

const initialState = {
  activities: [],
  currentActivity: null,
  loading: false,
  error: null,
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: [...state.activities, action.payload],
      };
    case CREATE_ACTIVITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case SET_CURRENT_ACTIVITY:        
        return {
          ...state,
          currentActivity: action.payload,
        };
      case CLEAR_CURRENT_ACTIVITY:
        return {
          ...state,
          currentActivity: null,
        };
        case FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
