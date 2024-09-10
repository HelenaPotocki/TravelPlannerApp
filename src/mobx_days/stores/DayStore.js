import { makeAutoObservable, runInAction } from "mobx";
import {
  updateDayDescription,
  createDay,
  getAllDaysPerTrip
} from '../../database/models/Day';
import { addDays, differenceInDays, format, parse } from 'date-fns';

class DayStore {

  selectedDay = null;
  days = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedDay(day) {
    this.selectedDay = day;
  }

  getSelectedDay() {
    return this.selectedDay;
  }
  getDays(){
    return this.days;
  }

  async setDays(tripId) {
    try {
      const fetchedDays = await getAllDaysPerTrip(tripId);
      runInAction(() => {
        this.days = fetchedDays;
      });
      
    } catch (error) {
      console.error('Failed to fetch days:', error);
    }
  }

  async addDaysForTrip(tripId, StartDate, EndDate) {
    this.loading = true;
    const startDate = parse(StartDate, 'yyyy/MM/dd', new Date());
    const endDate = parse(EndDate, 'yyyy/MM/dd', new Date());
    const numberOfDays = differenceInDays(endDate, startDate) + 1;
    const dayPromises = [];
    for (let i = 0; i < numberOfDays; i++) {
      const currentDay = addDays(startDate, i);
      const formattedDay = format(currentDay, 'yyyy-MM-dd'); 
      dayPromises.push(createDay(formattedDay, tripId));
    }
    try {
      await Promise.all(dayPromises);
      console.log(`All days for Trip ID: ${tripId} have been successfully created.`);
      runInAction(() => {
          this.loading = false;
        });
    } catch (error) {
      console.error(`Error creating days for Trip ID: ${tripId}`, error);
      runInAction(() => {
          this.loading = false;
        });
    }
  }

  async updateDayInDatabase(day) {
    this.loading = true;
    try {
      await updateDayDescription(day.DayID, day.Description);
      runInAction(() => {
        this.selectedDay = { ...this.selectedDay, Description: day.Description };
        this.setDays(this.selectedDay.TripID);
        this.loading = false;
      });
    } catch (error) {
      console.error("Failed to update day in database:", error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
const dayStore = new DayStore();
export default dayStore;