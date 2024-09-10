import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import InputField from '../components/General/InputField';
import styles from '../style/generalStyle';
import ScreenWrapper from '../components/General/screenWrapper';
import TimePicker from '../components/General/TimePicker';
import { inject, observer } from 'mobx-react';


const TransportDetailsScreen = inject('transportStore')(observer(({ transportStore }) => {
  const transport = transportStore.getSelectedTransport();

  const [isEditable, setIsEditable] = useState(false);

  const [description, setDescription] = useState(transport.Description);
  const [typeOfTransport, setTypeOfTransport] = useState(transport.TypeOfTransport);
  const [fromLocation, setFromLocation] = useState(transport.FromLocation);
  const [toLocation, setToLocation] = useState(transport.ToLocation);
  const [departureTime, setDepartureTime] = useState(transport.DepartureTime);
  const [arrivalTime, setArrivalTime] = useState(transport.ArrivalTime);

  const handleDepartureTimeChange = (newDepartureTime) => {
    setDepartureTime(newDepartureTime);
    if (newDepartureTime >= arrivalTime) {
      setArrivalTime(newDepartureTime);
    }
  };

  const handleArrivalTimeChange = (newArrivalTime) => {
    if (newArrivalTime >= departureTime) {
      setArrivalTime(newArrivalTime);
    } else {
      Alert.alert('Invalid Time', 'Arrival time must be after start time.');
    }
  };
  const handleUpdate = async () => {
    transportStore.updateTransportInDatabase(description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime);
    setIsEditable(false);
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.updateButton} onPress={() => setIsEditable(true)} disabled={isEditable}>
                <Text style={styles.buttonText}>Update Transport</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.formContainer}>
            <InputField 
                label="Description:" 
                value={description} 
                onChangeText={setDescription} 
                placeholder="Enter Description"
                editable={isEditable}
                />
            <InputField 
                label="Type Of Transport:" 
                value={typeOfTransport} 
                onChangeText={setTypeOfTransport} 
                placeholder="Enter Type of Transport"
                editable={isEditable}
                />
            <InputField 
                label="From :" 
                value={fromLocation} 
                onChangeText={setFromLocation} 
                placeholder="From"
                editable={isEditable}
                />
            <InputField 
                label="Description:" 
                value={toLocation} 
                onChangeText={setToLocation} 
                placeholder="To"
                editable={isEditable}
                />

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10, marginHorizontal: 10}}
                      pointerEvents={isEditable ? 'auto' : 'none'}
                >
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.label}>Departure Time:</Text>
                        <TimePicker label={departureTime ? departureTime : "Select Departure Time"} onTimeChange={handleDepartureTimeChange} />
                    </View>
                    <View style={{alignItems: 'center'}}  >
                        <Text style={styles.label}>Arrival Time:</Text>
                        <TimePicker label={arrivalTime ? arrivalTime : "Select Arrival Time"} onTimeChange={handleArrivalTimeChange} />
                    </View>
                </View>    

                {isEditable ? (
                    <>
                    <TouchableOpacity style={styles.addButton} onPress={handleUpdate}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditable(false)}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    </>
                ) : null}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}));

export default TransportDetailsScreen;