import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import activityReducer from './activityReducer';
import selectedLocationReducer from './selectedLocationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  activityState: activityReducer,
  selectedLocation: selectedLocationReducer,
});

export default rootReducer;