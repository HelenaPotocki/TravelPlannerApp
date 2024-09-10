import TripModel from '../Models/TripModel';

const TripController = {
    createTrip: async (name, description, startDate, endDate) => {
        try {
             const newTripId = await TripModel.createTrip(name, description, startDate, endDate);

             return newTripId;
        } catch (error) {
            console.error('Failed to create trip:', error);
        }
    },

    getAllTrips: async () => {
        try {
            const trips = await TripModel.getAllTrips();
            return trips;
        } catch (error) {
            console.error('Failed to get trips:', error);
            return [];
        }
    },

    deleteTrip: async (tripId) => {
        try {
            await TripModel.deleteTrip(tripId);
        } catch (error) {
            console.error('Failed to delete trip:', error);
        }
    }
};

export default TripController;


/*



getTripById: async (tripId) => {
        try {
            const trip = await TripModel.getTripById(tripId);
            return trip;
        } catch (error) {
            console.error('Failed to get trip:', error);
        }
    },




    

    updateTrip: async (tripId, name, description, startDate, endDate) => {
        try {
            await TripModel.updateTrip(tripId, name, description, startDate, endDate);
        } catch (error) {
            console.error('Failed to update trip:', error);
        }
    },

*/