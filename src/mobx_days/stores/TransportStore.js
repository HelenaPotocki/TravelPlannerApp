import { makeAutoObservable, runInAction } from "mobx";
import {
    createTransport,
    getAllTransportsPerDay,
    updateTransport,
    deleteTransport
} from '../../database/models/Transport';
import dayStore from './DayStore';

class TransportStore {

  selectedTransport = null;
  transports = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTransport(transport) {
    this.selectedTransport = transport;
  }

  getSelectedTransport() {
    return this.selectedTransport;
  }
  getTransports(){
    return this.transports;
  }

  async setTransports(dayId) {

    try {
      const fetchedTransports = await getAllTransportsPerDay(dayId);
      runInAction(() => {
        this.transports = fetchedTransports;
      });
      
    } catch (error) {
      console.error('Failed to fetch transports:', error);
    }
  }

  async addTransport(description, type, from, to, departureTime, arrivalTime) {
    this.loading = true;
    const day = dayStore.getSelectedDay();
    try {
      await createTransport(day.DayID, description, type, from, to, departureTime, arrivalTime);
      runInAction(() => {
        this.setTransports(day.DayID);
        this.loading = false;
      });
    } catch (error) {
      console.error("Failed to a transport in database:", error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async updateTransportInDatabase(description, type, from, to, departureTime, arrivalTime) {
    this.loading = true;
    try {
      await updateTransport(this.selectedTransport.TransportID, description, type, from, to, departureTime, arrivalTime);
      runInAction(() => {
        this.selectedTransport = { ...this.selectedTransport, description, type, from, to, departureTime, arrivalTime };
        this.setTransports(this.selectedTransport.DayID);
        this.loading = false;
      });
    } catch (error) {
      console.error("Failed to update transport in database:", error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async deleteTransportFromDatabase(transportId) {
    this.loading = true;
    const day = dayStore.getSelectedDay();
    try {
      await deleteTransport(transportId);
      runInAction(() => {
        this.setTransports(day.DayID);
        this.loading = false;
      });
    } catch (error) {
      console.error("Failed to delete transport from database:", error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
const transportStore = new TransportStore();
export default transportStore;