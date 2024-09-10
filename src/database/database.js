import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('TravelPlannerDatabase.db');



export const initializeDatabase = () => {
  const includeForeignKeys = () => {
  db.transaction(tx => {
    tx.executeSql('PRAGMA foreign_keys = ON;', [], 
      () => console.log('Foreign keys included'),
      (_, error) => console.error('Error including foreign keys:', error)
    );
  });
};

includeForeignKeys();
  db.transaction(tx => {

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Trip (
    TripId INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Description TEXT,
    StartDate TEXT,
    EndDate TEXT
    );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Day (
    DayID INTEGER PRIMARY KEY AUTOINCREMENT,
    DayDate DATE,
    TripID INTEGER, 
    Description TEXT,
    FOREIGN KEY (TripID) REFERENCES Trip(TripId)
    );`
    ); 
     tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Location (
    LocationID INTEGER PRIMARY KEY AUTOINCREMENT,
    Latitude REAL NOT NULL,
    Longitude REAL NOT NULL, 
    PlaceName TEXT
    );`
    ); 
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Transport (
    TransportID INTEGER PRIMARY KEY AUTOINCREMENT,
    DayID INTEGER,
    Description TEXT,
    TypeOfTransport TEXT,
    FromLocation TEXT,
    ToLocation TEXT,
    DepartureTime TIME,
    ArrivalTime TIME,
    FOREIGN KEY (DayID) REFERENCES Day(DayID)
    );`
    );
tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Activity (
      ActivityID INTEGER PRIMARY KEY AUTOINCREMENT,
      DayID INTEGER,
      Name TEXT,
      Description TEXT,
      StartTime TIME, 
      EndTime TIME,
      LocationID INTEGER,
      FOREIGN KEY (LocationID) REFERENCES Location(LocationID),
      FOREIGN KEY (DayID) REFERENCES Day(DayID)
      );`
    );
  },
(error) => {
    console.error('Database initialization error:', error);
  }
);
};

export default db;