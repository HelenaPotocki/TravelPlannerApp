
//Trip

export const insertTripQuery = (name, description, startDate, endDate) => `
  INSERT INTO Trip (Name, Description, StartDate,  EndDate) VALUES ('${name}', '${description}', '${startDate}', '${endDate}');
`;

export const getAllTripsQuery = () => `
  SELECT * FROM Trip;
`;

export const getTripByIdQuery = (tripId) => `
  SELECT * FROM Trip WHERE TripId = ${tripId};
`;

export const updateTripQuery = (tripId, name, description, startDate, endDate) => `
  UPDATE Trip SET Name = '${name}', Description = '${description}', StartDate = '${startDate}', EndDate = '${endDate}' WHERE TripId = ${tripId};
`;

export const deleteTripQuery = (tripId) => `
  DELETE FROM Trip WHERE TripId = ${tripId};
`;


// Day

export const insertDayQuery = (dayDate, tripID, description) => `
  INSERT INTO Day (DayDate, TripID, Description) VALUES ('${dayDate}', '${tripID}', '${description}');
`;

export const getAllDaysPerTripQuery = (tripId) => `
  SELECT * FROM Day WHERE TripID = ${tripId};
`;

export const getDayByIdQuery = (dayId) => `
  SELECT * FROM Day WHERE DayID = ${dayId};
`;

export const updateDayQuery = (dayId, dayDate, description) => `
  UPDATE Day SET DayDate = '${dayDate}', Description = '${description}' WHERE DayID = ${dayId};
`;

export const updateDayDescriptionQuery = (dayId, description) => `
  UPDATE Day SET Description = '${description}' WHERE DayID = ${dayId};
`;

export const deleteDayQuery = (dayId) => `
  DELETE FROM Day WHERE DayID = ${dayId};
`;



// Location

export const insertLocationQuery = (latitude, longitude, placeName) => `
  INSERT INTO Location (Latitude, Longitude, PlaceName) VALUES (${latitude}, ${longitude}, '${placeName}');
`;

export const getAllLocationsQuery = () => `
  SELECT * FROM Location;
`;

export const getLocationId = () => `
SELECT LocationID FROM Location WHERE Latitude = ? AND Longitude = ?;
`;

export const getLocationByIdQuery = (locationId) => `
  SELECT * FROM Location WHERE LocationID = ${locationId};
`;

export const updateLocationQuery = (locationId, latitude, longitude, placeName) => `
  UPDATE Location SET Latitude = ${latitude}, Longitude = ${longitude}, PlaceName = '${placeName}' WHERE LocationID = ${locationId};
`;

export const deleteLocationQuery = (locationId) => `
  DELETE FROM Location WHERE LocationID = ${locationId};
`;

// Transport

export const insertTransportQuery = (dayId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime) => `
  INSERT INTO Transport (DayID, Description, TypeOfTransport, FromLocation, ToLocation, DepartureTime, ArrivalTime) 
  VALUES (${dayId}, '${description}', '${typeOfTransport}', '${fromLocation}', '${toLocation}', '${departureTime}', '${arrivalTime}');
`;

export const getAllTransportQuery = () => `
  SELECT * FROM Transport;
`;

export const getAllTransportsPerDayQuery = () => `
  SELECT * FROM Transport WHERE DayID = ?;
`;

export const getTransportByIdQuery = (transportId) => `
  SELECT * FROM Transport WHERE TransportID = ${transportId};
`;

export const updateTransportQuery = (transportId, description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime) => `
  UPDATE Transport 
  SET Description = '${description}', TypeOfTransport = '${typeOfTransport}', FromLocation = '${fromLocation}', ToLocation = '${toLocation}', DepartureTime = '${departureTime}', ArrivalTime = '${arrivalTime}' 
  WHERE TransportID = ${transportId};
`;

export const deleteTransportQuery = (transportId) => `
  DELETE FROM Transport WHERE TransportID = ${transportId};
`;

// Activity

export const insertActivityQuery = (dayId, name, description, startTime, endTime, locationId) => `
  INSERT INTO Activity (DayID, Name, Description, StartTime, EndTime, LocationID) 
  VALUES (${dayId}, '${name}', '${description}', '${startTime}', '${endTime}', ${locationId});
`;

export const getAllActivitiesQuery = () => `
  SELECT * FROM Activity;
`;

export const deleteAllActivitiesQuery = () => `
DELETE FROM Activity;
`;

export const getAllActivitiesPerDayQuery = () => `
  SELECT * FROM Activity WHERE DayID = ?;
`;


export const getActivityByIdQuery = (activityId) => `
  SELECT * FROM Activity WHERE ActivityID = ${activityId};
`;

export const updateActivityQuery = (activityId, name, description, startTime, endTime, locationId) => `
  UPDATE Activity 
  SET Name = '${name}', Description = '${description}', StartTime = '${startTime}', EndTime = '${endTime}', LocationID = ${locationId} 
  WHERE ActivityID = ${activityId};
`;

export const deleteActivityQuery = (activityId) => `
  DELETE FROM Activity WHERE ActivityID = ${activityId};
`;

