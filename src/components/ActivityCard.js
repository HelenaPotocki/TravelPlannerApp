import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from '../style/generalStyle';
import { useDispatch } from 'react-redux';
import { fetchAndSetLocation, removeActivity } from '../redux_location/actions';
import { setCurrentActivity } from '../redux_location/actions';
import deleteAlert from '../utils/deleteAlert';

export default function ActivityCard({navigation, activity}) {
  const dispatch = useDispatch();

  const handleDeleteActivity = () => {
    deleteAlert('activity', () => {dispatch(removeActivity(activity.ActivityID, activity.DayID))});
  };
 
  const handleSeeDetails = async () => {
    try {
        dispatch(setCurrentActivity(activity));
        dispatch(fetchAndSetLocation(activity.LocationID));
        navigation.navigate('ActivityDetailsScreen');
    } catch (error) {
        console.error('Failed to set location:', error);
        Alert.alert('Error', 'Failed to set location. Please try again.');
    }
};

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{activity.Name}</Text>
        <Text style={styles.cardDetails}>{activity.Description}</Text>
        <Text style={styles.cardDetails}>{activity.StartTime} - {activity.EndTime}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
        style={styles.detailsButton}
        onPress={() => (handleSeeDetails())}>
          <Text style={styles.detailsButtonText}>See details</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.deleteButton}
        onPress={handleDeleteActivity}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity> 
      </View>

    </View>
  )
}