import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimePicker({ label, onTimeChange }) {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState('');

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShow(false);
    setTime(currentTime);

    const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
    setShowTime(formattedTime);

    if (onTimeChange) {
      onTimeChange(formattedTime);
    }
  };

  return (
    <View>
        <TouchableOpacity onPress={() => setShow(true)}>
            <TextInput style={styles.input} value={showTime} editable={false} placeholder={label} />
        </TouchableOpacity>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
});
