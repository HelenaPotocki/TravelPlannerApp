import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inject, observer } from 'mobx-react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import TimePicker from '../components/General/TimePicker';
import { createActivityAction } from '../redux_location/actions'; 
import ScreenWrapper from '../components/General/screenWrapper';
import styles from '../style/generalStyle';
import formStyle from '../style/formStyle';

const AddActivity = inject('dayStore')(observer(({ dayStore, navigation }) => {

  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location); 
  const day = dayStore.getSelectedDay();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('12:00');
  const [endTime, setEndTime] = useState('12:00');

  const handleStartTimeChange = (newStartTime) => {
    setStartTime(newStartTime);
    if (newStartTime >= endTime) {
      setEndTime(newStartTime);
    }
  };

  const handleEndTimeChange = (newEndTime) => {
    if (newEndTime >= startTime) {
      setEndTime(newEndTime);
    } else {
      Alert.alert('Invalid Time', 'End time must be after start time.');
    }
  };

  const handleAddActivity = async () => {
    try {
       if (!location) {
        throw new Error('Please select a location');
      }
      dispatch(createActivityAction(day.DayID, name, description, startTime, endTime, location));
      Alert.alert('Success', `Activity "${name}" has been added successfully!`);
      navigation.goBack();
    } catch (error) {
      console.error('Error creating activity:', error);
      Alert.alert('Error', `Failed to create activity: ${error.message}`); 
    }
  };

  return (
    <ScreenWrapper>
      <View style={formStyle.container}>
        <Text style={formStyle.label}>Activity Name:</Text>
        <TextInput style={formStyle.input} placeholder="Enter Activity Name" value={name} onChangeText={setName} />

        <Text style={formStyle.label}>Description:</Text>
        <TextInput style={formStyle.input} placeholder="Enter Description" value={description} onChangeText={setDescription} />

        <Text style={formStyle.label}>Location:</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LocationSearchScreen')}>
          <TextInput
            style={formStyle.input}
            value={location ? location.name : 'Choose location'}
            editable={false}
            placeholder="Location"
          />
        </TouchableOpacity>

        <Text style={formStyle.label}>Start Time:</Text>
        <TimePicker label="Select Start Time" onTimeChange={handleStartTimeChange} />

        <Text style={formStyle.label}>End Time:</Text>
        <TimePicker label="Select End Time" onTimeChange={handleEndTimeChange} />

        <TouchableOpacity style={styles.addButton} onPress={handleAddActivity}>
          <Text style={styles.addButtonText}>Add Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}));

export default AddActivity;
