// Mock data for trips
export const mockTrips = [
  {
    TripId: 1,
    Name: 'Beach Vacation',
    StartDate: '2024-08-01',
    EndDate: '2024-08-10'
  },
  {
    TripId: 2,
    Name: 'Mountain Adventure',
    StartDate: '2024-09-05',
    EndDate: '2024-09-15'
  },
  {
    TripId: 3,
    Name: 'City Escape',
    StartDate: '2024-10-12',
    EndDate: '2024-10-20'
  },
  {
    TripId: 4,
    Name: 'Cruise Around the World',
    StartDate: '2024-11-01',
    EndDate: '2024-11-30'
  },
  {
    TripId: 5,
    Name: 'Cruise Around the World',
    StartDate: '2024-11-01',
    EndDate: '2024-11-30'
  },
  {
    TripId: 6,
    Name: 'Cruise Around the World',
    StartDate: '2024-11-01',
    EndDate: '2024-11-30'
  },
  {
    TripId: 7,
    Name: 'Cruise Around the World',
    StartDate: '2024-11-01',
    EndDate: '2024-11-30'
  }
];

export const mockDays = [
  {
    DayID: 1,
    DayDate: '2024-08-01',
    Description: 'Arrival and exploring the city',
    TripId: 1,
  },
  {
    DayID: 2,
    DayDate: '2024-08-02',
    Description: 'Day at the beach',
    TripId: 1,
  },
  {
    DayID: 3,
    DayDate: '2024-08-03',
    Description: 'Visit to the museum',
    TripId: 2,
  },
  {
    DayID: 4,
    DayDate: '2024-08-04',
    Description: 'Departure and shopping',
    TripId: 3,
  },
];

export const mockLocations = [
  {
    LocationID: 1,
    Latitude: 40.7128,
    Longitude: -74.0060,
    Address: 'New York, NY, USA',
    PlaceName: 'Central Park',
  },
  {
    LocationID: 2,
    Latitude: 40.748817,
    Longitude: -73.985428,
    Address: 'New York, NY, USA',
    PlaceName: 'Empire State Building',
  },
  {
    LocationID: 3,
    Latitude: 40.730610,
    Longitude: -73.935242,
    Address: 'New York, NY, USA',
    PlaceName: 'Statue of Liberty',
  },
  {
    LocationID: 4,
    Latitude: 40.712776,
    Longitude: -74.005974,
    Address: 'New York, NY, USA',
    PlaceName: 'Times Square',
  },
];

export const mockTransport = [
  {
    TransportID: 1,
    DayID: 1,
    Description: 'Taxi from airport to hotel',
    TypeOfTransport: 'Taxi',
    FromLocation: 1,
    ToLocation: 2,
    DepartureTime: '10:00',
    TravelTime: 2,
    TicketFile: null,  // No ticket file
  },
  {
    TransportID: 2,
    DayID: 2,
    Description: 'Subway to the beach',
    TypeOfTransport: 'Subway',
    FromLocation: 2,
    ToLocation: 3,
    DepartureTime: '09:30',
    TravelTime: 2,
    TicketFile: null,  // No ticket file
  },
  {
    TransportID: 3,
    DayID: 3,
    Description: 'Bus to the museum',
    TypeOfTransport: 'Bus',
    FromLocation: 3,
    ToLocation: 4,
    DepartureTime: '11:00',
    TravelTime: 2,
    TicketFile: null,  // No ticket file
  },
  {
    TransportID: 4,
    DayID: 4,
    Description: 'Taxi to the airport',
    TypeOfTransport: 'Taxi',
    FromLocation: 4,
    ToLocation: 1,
    DepartureTime: '13:00',
    TravelTime: 2,
    TicketFile: null,  // No ticket file
  },
];

export const mockActivities = [
  {
    ActivityID: 1,
    DayID: 1,
    Name: 'Walk in Central Park',
    Description: 'Explore the beauty of Central Park',
    StartTime: '14:00',
    EndTime: '16:00',
    TicketFile: null,  // No ticket file
    LocationID: 1,
  },
  {
    ActivityID: 2,
    DayID: 2,
    Name: 'Relax at the beach',
    Description: 'Spend the day at the beach',
    StartTime: '10:00',
    EndTime: '17:00',
    TicketFile: null,  // No ticket file
    LocationID: 3,
  },
  {
    ActivityID: 3,
    DayID: 3,
    Name: 'Visit the museum',
    Description: 'A day at the museum',
    StartTime: '12:00',
    EndTime: '15:00',
    TicketFile: null,  // No ticket file
    LocationID: 4,
  },
  {
    ActivityID: 4,
    DayID: 4,
    Name: 'Shopping at Times Square',
    Description: 'Last-minute shopping before departure',
    StartTime: '10:00',
    EndTime: '12:00',
    TicketFile: null,  // No ticket file
    LocationID: 2,
  },
];

