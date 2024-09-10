import db from '../../database/database';
import {
  insertTripQuery,
  getAllTripsQuery,
  deleteTripQuery
} from '../../database/queries';

const TripModel = {
    createTrip: async (name, description, startDate, endDate) => {
        return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            insertTripQuery(name, description, startDate, endDate),
            [],
            (_, result) => {
              const tripId = result.insertId;
              resolve(result);},
            (_, error) => reject(error)
          );
        });
  });
    },

    getAllTrips: async () => {
        return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllTripsQuery(),
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
    },

    deleteTrip: async (tripId) => {
        return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteTripQuery(tripId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
    }
};

export default TripModel;