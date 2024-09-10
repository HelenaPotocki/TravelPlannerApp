import db from '../database';
import {
  insertTransportQuery,
  getTransportByIdQuery,
  updateTransportQuery,
  deleteTransportQuery,
  getAllTransportsPerDayQuery,
  getAllTransportQuery,
} from '../queries';

export const createTransport = (dayId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        insertTransportQuery(dayId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getAllTransports = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllTransportQuery(),
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export const getAllTransportsPerDay = (dayID) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getAllTransportsPerDayQuery(),
        [dayID],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export const getTransportById = (transportId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        getTransportByIdQuery(transportId),
        [],
        (_, { rows: { _array } }) => resolve(_array[0]),
        (_, error) => reject(error)
      );
    });
  });
};

export const updateTransport = (transportId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        updateTransportQuery(transportId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteTransport = (transportId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        deleteTransportQuery(transportId),
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
