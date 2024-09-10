export const SET_LOCATION = 'SET_LOCATION';
export const CREATE_LOCATION_REQUEST = 'CREATE_LOCATION_REQUEST';
export const CREATE_LOCATION_SUCCESS = 'CREATE_LOCATION_SUCCESS';
export const CREATE_LOCATION_FAILURE = 'CREATE_LOCATION_FAILURE';

export const SET_CURRENT_ACTIVITY = 'SET_CURRENT_ACTIVITY';
export const CLEAR_CURRENT_ACTIVITY = 'CLEAR_CURRENT_ACTIVITY';

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const CREATE_ACTIVITY_SUCCESS = 'CREATE_ACTIVITY_SUCCESS';
export const CREATE_ACTIVITY_FAILURE = 'CREATE_ACTIVITY_FAILURE';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';

import { getLocationById, createLocation } from '../database/models/Location';
import { createActivity, updateActivity, deleteActivity, getAllActivities} from '../database/models/Activity';


export const setLocation = (location) => ({
    type: SET_LOCATION,
    payload: location,
});


export const setCurrentActivity = (activity) => ({
  type: SET_CURRENT_ACTIVITY,
  payload: activity,
});

export const clearCurrentActivity = () => ({
  type: CLEAR_CURRENT_ACTIVITY,
});

export const fetchAndSetLocation = (locationId) => async (dispatch) => {
    try {
        const locationData = await getLocationById(locationId);
        
        
        if (locationData) {
            const location = {
                name: locationData.PlaceName || 'Unknown location', 
                latitude: locationData.Latitude,
                longitude: locationData.Longitude,
            };
            if (location.latitude && location.longitude) {
                dispatch(setLocation(location)); 
            } else {
                console.error('Location coordinates not found');
            }
        } else {
            console.error('No location data found');
        }
    } catch (error) {
        console.error('Failed to fetch location:', error);
    }
};

export const createActivityAction = (dayId, name, description, startTime, endTime, location) => async (dispatch) => {
  dispatch({ type: CREATE_ACTIVITY }); 
  try {
    const locationId = await dispatch(getLoc(location));
    const result = await createActivity(dayId, name, description, startTime, endTime, locationId);
    
    dispatch({ type: CREATE_ACTIVITY_SUCCESS, payload: result });
    dispatch(fetchActivities(dayId));

  } catch (error) {
    dispatch({ type: CREATE_ACTIVITY_FAILURE, payload: error.message });
  }
};

export const getLoc = (location) => async (dispatch) => {
    dispatch({ type: CREATE_LOCATION_REQUEST });

    try {
        const locationId = await createLocation(location.latitude, location.longitude, location.name);

        await dispatch({
            type: CREATE_LOCATION_SUCCESS,
            payload: locationId,  
        });

        return locationId; 
    } catch (error) {
        console.error('Error inserting location:', error);

        dispatch({
            type: CREATE_LOCATION_FAILURE,
            payload: error.message,
        });

        throw error; 
    }
};

export const fetchActivities = (dayID) => {
  return async dispatch => {
    try {
      const activities = await getAllActivities(dayID);
      dispatch({ type: FETCH_ACTIVITIES, payload: activities });
    } catch (error) {
      console.error('Error fetching activities: ', error);
    }
  };
};

export const removeActivity = (activityID, dayID) => {
  return async dispatch => {
    try {
      await deleteActivity(activityID);
      dispatch(fetchActivities(dayID)); 
    } catch (error) {
      console.error('Error deleting activity: ', error);
    }

  };
};

export const modifyActivity = (activityId, name, description, startTime, endTime, dayID, location) => {
  return async dispatch => {
    try {
      const locationId = await dispatch(getLoc(location));
      await updateActivity(activityId, name, description, startTime, endTime, locationId);
      dispatch(fetchActivities(dayID)); 
    } catch (error) {
      console.error('Error updating activity: ', error);
    }
  };
};

