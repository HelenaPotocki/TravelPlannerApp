import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tripstyle from '../style/tripStyle';
import { formatDisplayDate } from '../utils/dateUtils';

export default function DayCard( {day, onSelectDay } ) {
  
  return (
     <View style={tripstyle.listElementContainer}>
      <View style={tripstyle.textContainer}>
        <Text style={tripstyle.tripName}>{formatDisplayDate(day.DayDate)}</Text>
        <Text style={tripstyle.tripDates}>{day.Description}</Text>
      </View>
      <TouchableOpacity style={tripstyle.detailsButton}
      onPress={onSelectDay}>
        <Text style={tripstyle.detailsButtonText}>See itinerary</Text>
      </TouchableOpacity>
    </View>
  )
}