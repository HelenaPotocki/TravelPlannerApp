import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/General/InputField';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../style/generalStyle';
import ScreenWrapper from '../components/General/screenWrapper';
import TimePicker from '../components/General/TimePicker';
import MapCard from '../components/General/MapCard';
import { useDispatch, useSelector } from 'react-redux';
import { modifyActivity } from '../redux_location/actions';

export default function ActivityDetailsScreen() {
  const dispatch = useDispatch();

  const activity = useSelector(state => state.activityState.currentActivity);
  const location = useSelector(state => state.location.location);
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(activity.Name);
  const [description, setDescription] = useState(activity.Description);
  const [startTime, setStartTime] = useState(activity.StartTime);
  const [endTime, setEndTime] = useState(activity.EndTime);

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
  const handleUpdate = async () => {
      try {
        dispatch(modifyActivity(activity.ActivityID, name, description, startTime, endTime, activity.DayID, location));
      Alert.alert('Activity Updated', 'The activity was updated successfully.');
      setIsEditable(false);
      }catch(error){
        Alert.alert('Error', 'Failed to update activity. Please try again.');
      }
  };
  return (
    <ScreenWrapper>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.updateButton} onPress={() => setIsEditable(true)} disabled={isEditable}>
                    <Text style={styles.buttonText}>Update Activity</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.formContainer}>

                <InputField 
                label="Activity Name:" 
                value={name} 
                onChangeText={setName} 
                placeholder="Enter Activity Name"
                editable={isEditable}
                />
                <InputField 
                label="Description:" 
                value={description} 
                onChangeText={setDescription} 
                placeholder="Enter Description"
                editable={isEditable}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10, marginHorizontal: 10}}
                      pointerEvents={isEditable ? 'auto' : 'none'}
                >
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.label}>Start Time:</Text>
                        <TimePicker label={startTime ? startTime : "Select Start Time"} onTimeChange={handleStartTimeChange} />
                    </View>
                    <View style={{alignItems: 'center'}}  >
                        <Text style={styles.label}>End Time:</Text>
                        <TimePicker label={endTime ? endTime : "Select End Time"} onTimeChange={handleEndTimeChange} />
                    </View>
                </View>

                <Text style={styles.label}>Location:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LocationSearchScreen')} disabled={!isEditable}>
                    <TextInput style={styles.input}  editable={false} placeholder={location ? location.name :'Location'} />
                </TouchableOpacity>

                
                {isEditable ? (
                    <>
                      <TouchableOpacity style={styles.addButton} onPress={handleUpdate}>
                          <Text style={styles.buttonText}>Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditable(false)}>
                          <Text style={styles.buttonText}>Cancel</Text>
                      </TouchableOpacity>
                    </>
                ) : (
                    <View style={{gap:8}}>
                      <MapCard/>
                      <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('LocationMapScreen')}>
                          <View style={{flexDirection: 'row', gap: 8}}>
                            <FontAwesome name="map-marker" size={20} color="black" />
                            <Text style={styles.buttonText}>See Full Screen Location</Text>
                          </View>
                          
                      </TouchableOpacity>
                    
                    </View>

                )}
                
            </View>
        </ScrollView>
    </ScreenWrapper>
  );
}