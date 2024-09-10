import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import formStyle from '../../style/formStyle';

const DatePickerModal = ({ visible, date, minimumDate, onDateChange, onClose }) => (
  <Modal animationType="fade" transparent={true} visible={visible}>
    <View style={formStyle.modalBackground}>
      <View style={formStyle.modalContainer}>
        <DatePicker
          mode="calendar"
          current={date}
          minimumDate={minimumDate}
          selected={date}
          onDateChange={onDateChange}
        />
        <TouchableOpacity style={formStyle.doneButton} onPress={onClose}>
          <Text style={formStyle.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default DatePickerModal;
