import db from '../database';
import {
  insertLocationQuery,
  getAllLocationsQuery,
  getLocationByIdQuery,
  updateLocationQuery,
  deleteLocationQuery, 
  getLocationId,
} from '../queries';



export const createLocation = (latitude, longitude, placeName) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getLocationId(),
        [latitude, longitude],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0).LocationID);
          } else {
            
            tx.executeSql(
              insertLocationQuery(latitude, longitude, placeName),
              [latitude, longitude, placeName],
              (_, insertResult) => resolve(insertResult.insertId),
              (_, insertError) => reject(insertError)
            );
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};


export const getAllLocations = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllLocationsQuery(),
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export const getLocationById = (locationId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getLocationByIdQuery(locationId),
        [],
        (_, { rows: { _array } }) => resolve(_array[0]),
        (_, error) => reject(error)
      );
    });
  });
};

export const updateLocation = (locationId, latitude, longitude, address, placeName) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        updateLocationQuery(locationId, latitude, longitude, address, placeName),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteLocation = (locationId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteLocationQuery(locationId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
