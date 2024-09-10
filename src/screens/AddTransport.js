import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
import ScreenWrapper from '../components/General/screenWrapper';
import styles from '../style/generalStyle';
import TimePicker from '../components/General/TimePicker';
import { observer, inject } from "mobx-react";

const AddTransport = inject('transportStore')(observer(({ transportStore, navigation }) => {

  const [description, setDescription] = useState('');
  const [typeOfTransport, setTypeOfTransport] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureTime, setDepartureTime] = useState('12:00');
  const [arrivalTime, setArrivalTime] = useState('12:00');

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
      Alert.alert('Invalid Time', 'End time must be after start time.');
    }
  };

  const handleAddTransport = () => {
    transportStore.addTransport(description, typeOfTransport, fromLocation, toLocation, departureTime, arrivalTime);
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles2.container}>
          <Text style={styles2.label}>Description:</Text>
          <TextInput style={styles2.input} placeholder="Enter Description" value={description} onChangeText={setDescription} />

          <Text style={styles2.label}>Type of Transport:</Text>
          <TextInput style={styles2.input} placeholder="Enter Type of Transport" value={typeOfTransport} onChangeText={setTypeOfTransport} />

          <Text style={styles2.label}>From:</Text>
          <TextInput style={styles2.input} placeholder="Enter From Location" value={fromLocation} onChangeText={setFromLocation} />

          <Text style={styles2.label}>To:</Text>
          <TextInput style={styles2.input} placeholder="Enter To Location" value={toLocation} onChangeText={setToLocation} />

          <Text style={styles2.label}>Departure Time:</Text>
          <TimePicker label="Select Departure Time" onTimeChange={handleDepartureTimeChange} />

          <Text style={styles2.label}>Arrival Time:</Text>
          <TimePicker label="Select Arrival Time" onTimeChange={handleArrivalTimeChange} />

          <TouchableOpacity style={styles.addButton} onPress={handleAddTransport}>
          <Text style={styles.addButtonText}>Add Transport</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}));

export default AddTransport;



const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
  },
});
