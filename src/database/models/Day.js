import db from '../database';
import {
  insertDayQuery,
  getAllDaysPerTripQuery,
  getDayByIdQuery,
  updateDayQuery,
  updateDayDescriptionQuery,
  deleteDayQuery
} from '../queries';

export const createDay = (dayDate, tripID) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        insertDayQuery(dayDate, tripID, ''),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getAllDaysPerTrip = (tripId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllDaysPerTripQuery(tripId),
        [],
        (_, { rows: { _array } }) =>{ resolve(_array);},
        (_, error) => reject(error)
      );
    });
  });
};

export const getDayById = (dayId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getDayByIdQuery(dayId),
        [],
        (_, { rows: { _array } }) => resolve(_array[0]),
        (_, error) => reject(error)
      );
    });
  });
};

export const updateDay = (dayId, dayDate, description) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        updateDayQuery(dayId, dayDate, description),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const updateDayDescription = (dayId, description) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        updateDayDescriptionQuery(dayId, description),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteDay = (dayId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteDayQuery(dayId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
