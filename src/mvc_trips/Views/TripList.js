import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import ScreenWrapper from '../../components/General/screenWrapper';
import TripCard from './TripCard';
import styles from '../../style/generalStyle';
import { useIsFocused } from '@react-navigation/native';
import TripController from '../Controllers/TripController';

export default function TripList({navigation}) {
    const [trips, setTrips] = useState([]);
    const isFocused = useIsFocused();

    const fetchTrips = async () => {
      try {
            const allTrips = await TripController.getAllTrips();
            setTrips(allTrips);
      } catch (error) {
            console.error('Error fetching trips:', error);
        }
    };

    useEffect(() => {
        if (isFocused) {
            fetchTrips();
        }
    }, [isFocused]);

    const onRefresh = useCallback(() => {
      fetchTrips();
    }, []);

    return (
    <ScreenWrapper>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddTrip')}
          >
          <Text style={styles.addButtonText}>Add New Trip</Text>
        </TouchableOpacity>
        </View>
        <FlatList
          data={trips}
          keyExtractor={(item) => item.TripId}
          renderItem={({ item }) => <TripCard trip={item} navigation={navigation} onRefresh={onRefresh}/>}
        />       
    </ScreenWrapper>
  )
}