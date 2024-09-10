import React, { useState } from 'react';
import { View, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import InputField from '../../components/General/InputField';
import DatePickerModal from '../../components/General/DatePickerModal';
import formStyle from '../../style/formStyle';
import styles from '../../style/generalStyle';
import { formatDate, handleStartDateChange, handleEndDateChange } from '../../utils/dateUtils';
import { createTrip } from '../../database/models/Trip';
import ScreenWrapper from '../../components/General/screenWrapper';
import { inject, observer } from 'mobx-react';
import { formatDisplayDate } from '../../utils/dateUtils';
import TripController from '../Controllers/TripController';

const AddTrip = inject('dayStore')(observer(({ dayStore, navigation }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [tripName, setTripName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(formatDate(today));
  const [endDate, setEndDate] = useState(formatDate(tomorrow));
  const [minEndDate, setMinEndDate] = useState(formatDate(tomorrow));

  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);

  const handleAddTrip = async() => {
     const newTripId = await TripController.createTrip(tripName, description, startDate, endDate);
     console.log('id trip', newTripId.insertId);
    dayStore.addDaysForTrip(newTripId.insertId, startDate, endDate);
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={formStyle.container}>
          <InputField label="Trip Name:" value={tripName} onChangeText={setTripName} placeholder="Enter Trip Name" />
          <InputField label="Description:" value={description} onChangeText={setDescription} placeholder="Enter Description" />
          
          <InputField
            label="Start date:"
            value={formatDisplayDate(startDate)}
            editable={false}
            onPress={() => setOpenStartDate(true)}
          />
          <DatePickerModal
            visible={openStartDate}
            date={startDate}
            minimumDate={formatDate(today)}
            onDateChange={(date) => handleStartDateChange(date, endDate, setStartDate, setEndDate, setMinEndDate)}
            onClose={() => setOpenStartDate(false)}
          />

          <InputField
            label="End date:"
            value={formatDisplayDate(endDate)}
            editable={false}
            onPress={() => setOpenEndDate(true)}
          />
          <DatePickerModal
            visible={openEndDate}
            date={endDate}
            minimumDate={minEndDate}
            onDateChange={(date) => handleEndDateChange(date, setEndDate)}
            onClose={() => setOpenEndDate(false)}
          />

          <TouchableOpacity style={[styles.addButton, { marginTop: 25 }]} onPress={handleAddTrip}>
            <Text style={styles.addButtonText}>Add Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}));

export default AddTrip;