import db from '../database';
import {
  insertActivityQuery,
  getActivityByIdQuery,
  updateActivityQuery,
  deleteActivityQuery,
  getAllActivitiesPerDayQuery,
  getAllActivitiesQuery,
  deleteAllActivitiesQuery
} from '../queries';


export const createActivity = (dayId, name, description, startTime, endTime, locationId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        insertActivityQuery(dayId, name, description, startTime, endTime, locationId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getAllActAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllActivitiesQuery(),
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export const getAllActivities = (dayID) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllActivitiesPerDayQuery(),
        [dayID], 
        (_, { rows: { _array } }) => resolve(_array), 
        (_, error) => {
          console.error('Error fetching activities:', error);
          reject(error);
        }
      );
    });
  });
};


export const getActivityById = (activityId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getActivityByIdQuery(activityId),
        [],
        (_, { rows: { _array } }) => resolve(_array[0]),
        (_, error) => reject(error)
      );
    });
  });
};

export const updateActivity = (activityId, name, description, startTime, endTime, locationId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        updateActivityQuery(activityId, name, description, startTime, endTime, locationId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteActivity = (activityId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteActivityQuery(activityId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteAllActivities = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteAllActivitiesQuery(), 
        [], 
        (_, result) => {
          console.log('All activities deleted successfully:', result);
          resolve(result);
        },
        (_, error) => {
          console.error('Failed to delete all activities:', error);
          reject(error);
        }
      );
    });
  });
};

