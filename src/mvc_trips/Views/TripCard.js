import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tripstyle from '../../style/tripStyle';
import { inject, observer } from 'mobx-react';
import {formatDisplayDate} from '../../utils/dateUtils';
import TripController from '../Controllers/TripController';
import deleteAlert from '../../utils/deleteAlert';

const TripCard = inject('dayStore')(observer(({ dayStore, trip, navigation, onRefresh }) => { 

  const handleSeeDetails = async () => {
    await dayStore.setDays(trip.TripId);
    navigation.navigate('TripDetails', { trip });
  };


 const handleDeleteTrip = () => {
    deleteAlert('trip', () => {
        TripController.deleteTrip(trip.TripId);
        onRefresh();
    });
  };

  return (
     <View style={tripstyle.listElementContainer}>
      <View style={tripstyle.textContainer}>
        <Text style={tripstyle.tripName}>{trip.Name}</Text>
        <Text style={tripstyle.tripDates}>{`${formatDisplayDate(trip.StartDate)} - ${formatDisplayDate(trip.EndDate)}`}</Text>
      </View>
      <View style={tripstyle.buttonsContainer}>
        <TouchableOpacity 
        style={tripstyle.detailsButton}
        onPress={() => handleSeeDetails()}>
          <Text style={tripstyle.detailsButtonText}>See details</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={tripstyle.deleteButton}
        onPress={() => handleDeleteTrip() }>
          <Text style={tripstyle.deleteButtonText}>Delete trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}));

export default TripCard;
