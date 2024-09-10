 import { useSelector } from "react-redux";
import { createLocation } from '../database/models/Location';


export const getLocationId = () => {
    const location = useSelector((state) => state.location); 
    createLocation(location.latitude, location.longitude, location.name)
  .then(locationId => {
    return locationId;
  })
  .catch(error => {
    console.error('Error inserting location:', error);
  });
}; 