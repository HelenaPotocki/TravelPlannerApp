import ScreenWrapper from '../components/General/screenWrapper';
import DayCard from '../components/DayCard';
import React from 'react';
import { Text, FlatList, View, StyleSheet, ScrollView } from 'react-native';
import styles from '../style/generalStyle';
import { observer, inject } from "mobx-react";
import { formatDisplayDate } from '../utils/dateUtils';


const TripDetails = inject('dayStore', 'transportStore')(observer(({ dayStore, transportStore, navigation, route }) => {

    const { trip } = route.params;
    const days = dayStore.days;

    const handleSelectDay = async (item) => {
        dayStore.setSelectedDay(item);
        transportStore.setTransports(item.DayID);
        navigation.navigate('DayItinerary', { currDay: item });
    };
   
    return (
        <ScreenWrapper>
            <ScrollView>
                <View style={styles2.detailsContainer}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles2.detailCardTitle}>{trip.Name}</Text>
                        <Text style={styles2.detailCardText}>{formatDisplayDate(trip.StartDate)} - {formatDisplayDate(trip.EndDate)}</Text>
                        <Text style={styles2.detailCardText}>{trip.Description}</Text>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        scrollEnabled={false}
                        data={days}
                        keyExtractor={(item) => item.DayID}
                        renderItem={({ item }) => <DayCard day={item} navigation={navigation} onSelectDay={ () => handleSelectDay(item) }/>}
                    />
                </View>
            </ScrollView>
        </ScreenWrapper>
  )

}));

export default TripDetails;

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
    datesContainer: {
        flexDirection: 'row',
    },
    detailCardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffe8d6', 
        marginBottom: 5,
    },
    detailCardText: {
        fontSize: 14,
        color: '#ddbea9',
    },
});
