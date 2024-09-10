import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { observer, inject } from "mobx-react";
import styles from '../style/generalStyle';
import formStyle from '../style/formStyle';
import {formatDisplayDate} from '../utils/dateUtils';

const DayDetails = inject('dayStore')(observer(({ dayStore }) => {

  const [isEditing, setIsEditing] = useState(false);
  const day = dayStore.getSelectedDay();
  const [newDescription, setNewDescription] = useState(day.Description || '');

  const handleEdit = () => {
    setIsEditing(true);
    setNewDescription(day.Description || '');
    console.log('day: ', day, ' drugo: ', day.Description )
  };

  const handleSave = async () => {
    console.log(day, ' i drugo  ', dayStore.getSelectedDay());
    if (newDescription !== day.Description) {
      await handleUpdate(newDescription); 
    }
    setIsEditing(false);
    console.log(day, ' i drugo  ', dayStore.getSelectedDay());
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewDescription(day.Description || '');
  };

  const handleUpdate = async () => {
    if (!newDescription || !day.DayID) {
      alert('Please provide both day ID and description');
      return;
    }
    console.log('updating to ', newDescription);
        await dayStore.updateDayInDatabase({ DayID: day.DayID, Description: newDescription });
    };

  return (
    <View style={styles2.detailsContainer}>
      <View style={{ alignItems: 'center', gap: 4, }}>
        <Text style={styles2.detailCardTitle}>{formatDisplayDate(day?.DayDate)}</Text>
        {isEditing ? (
          <>
            <TextInput
              style={formStyle.input}
              value={newDescription}
              onChangeText={setNewDescription}
              placeholder="Enter new description"
            />
            <View style={styles2.buttonContainer}>
              <TouchableOpacity onPress={handleSave} style={styles.addButton}>
                <Text style={styles.addButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            
            <Text style={styles2.detailCardTitle}>{day?.Description}</Text>
            <TouchableOpacity onPress={handleEdit} style={styles.updateButton}>
              <Text style={styles.buttonText}>Update Description</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}));

const styles2 = StyleSheet.create({
  detailsContainer: {
        backgroundColor: '#6b705c',
        margin: 25,
        padding: 10,
        //borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
        alignItems: 'center',
    },
    detailCardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffe8d6', 
        marginBottom: 5,
    },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#000000',
  },
});

export default DayDetails;
















/* import { View, Text } from 'react-native';
import React from 'react';
import { observer, inject } from "mobx-react";


const DayDetails = inject('dayStore')(observer(({ dayStore }) => {
return (
    <View style={styles2.detailsContainer}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles2.detailCardTitle}>{day.DayDate}</Text>
            <Text style={styles2.detailCardTitle}>{day.Description}</Text>
            <TouchableOpacity>
                <Text style={{color: '#FFFFFF'}}>
                Update Description
                </Text>
            </TouchableOpacity>
        </View>
    </View> 
  )
}));

export default DayDetails;

const styles2 = StyleSheet.create({
    detailsContainer: {
        backgroundColor: '#6b705c',
        margin: 25,
        padding: 10,
        //borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
        alignItems: 'center',
    },
    detailCardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffe8d6', 
        marginBottom: 5,
    },
}); */