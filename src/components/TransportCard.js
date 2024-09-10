import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../style/generalStyle';
import deleteAlert from '../utils/deleteAlert';
import { observer, inject } from "mobx-react";

const TransportCard = inject('transportStore')(observer(({ transportStore, navigation, transport }) => {
  const handleDeleteTransport = () => {
  deleteAlert('transport', () => {transportStore.deleteTransportFromDatabase(transport.TransportID)});
  };
  const handleSeeDetails = () => {
    transportStore.setSelectedTransport(transport);
    navigation.navigate('TransportDetailsScreen');
  };
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Type of transport: {transport.TypeOfTransport}</Text>
      <Text style={styles.cardDetails}>Description: {transport.Description}</Text>
      <Text style={styles.cardDetails}>From: {transport.FromLocation}</Text>
      <Text style={styles.cardDetails}>To: {transport.ToLocation}</Text>
      <Text style={styles.cardDetails}>Departure Time: {transport.DepartureTime}</Text>
      <Text style={styles.cardDetails}>Arrival Time: {transport.ArrivalTime}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
        style={styles.detailsButton}
        onPress={() => (handleSeeDetails())}>
          <Text style={styles.detailsButtonText}>See details</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.deleteButton}
        onPress={handleDeleteTransport}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}));

export default TransportCard;