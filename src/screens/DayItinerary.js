import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '../components/General/screenWrapper';
import ActivityCard from '../components/ActivityCard';
import TransportCard from '../components/TransportCard';
import styles from '../style/generalStyle';
import Collapsible from 'react-native-collapsible';
import { observer, inject } from "mobx-react";
import DayDetails from '../components/DayDetails';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from '../redux_location/actions';

const DayItinerary = inject('dayStore', 'transportStore')(observer(({ dayStore, transportStore, navigation }) => {
  const [isActivitiesCollapsed, setActivitiesCollapsed] = useState(true);
  const [isTransportCollapsed, setTransportCollapsed] = useState(true);
  
  const day = dayStore.getSelectedDay();

  const dispatch = useDispatch();
  const activities = useSelector(state => state.activityState.activities);

  const transports = transportStore.getTransports();

  useEffect(() => {
    dispatch(fetchActivities(day.DayID));
  }, [dispatch]);


  return (
    <ScreenWrapper>
      <ScrollView>
           <DayDetails/>
            <View style={styles.contentContainer}>
              {/* Activity Collapsible List */}
              <View style={{marginBottom: 5}}>
                <TouchableOpacity
                  onPress={() => setActivitiesCollapsed(!isActivitiesCollapsed)}
                  style={styles2.collapsibleHeader}
                >
                  <Text style={styles2.headerText}>Activities</Text>
                  <Ionicons
                    name={isActivitiesCollapsed ? 'chevron-down' : 'chevron-up'}
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isActivitiesCollapsed}>
                  <View style={styles2.listContainer}>
                    <TouchableOpacity 
                      style={styles.addButton}
                      onPress={() => navigation.navigate('AddActivity', {day})}>     
                      <Text style={styles.addButtonText}>Add New Activity</Text>
                    </TouchableOpacity>
                    <FlatList
                      scrollEnabled={false}
                      data={activities}
                      keyExtractor={(item) => item.ActivityID}
                      renderItem={({ item }) => <ActivityCard activity={item} navigation={navigation}/>}
                    />  
                  </View>
                </Collapsible>
              </View>
              

              {/* Transport Collapsible List */}
              <View style={{marginBottom: 5}}>
                <TouchableOpacity
                  onPress={() => setTransportCollapsed(!isTransportCollapsed)}
                  style={styles2.collapsibleHeader}
                >
                  <Text style={styles2.headerText}>Transport</Text>
                  <Ionicons
                    name={isTransportCollapsed ? 'chevron-down' : 'chevron-up'}
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isTransportCollapsed}>
                  <View style={styles2.listContainer}>
                    <TouchableOpacity 
                      style={styles.addButton}
                      onPress={() => navigation.navigate('AddTransport', {day})}>     
                      <Text style={styles.addButtonText}>Add New Transport</Text>
                    </TouchableOpacity>
                    <FlatList
                      scrollEnabled={false}
                      data={transports}
                      keyExtractor={(item) => item.TransportID}
                      renderItem={({ item }) => <TransportCard transport={item} navigation={navigation}/>}
                    />       
                  </View>
                </Collapsible>
              </View>
            </View>
              
          
          
        </ScrollView>
    </ScreenWrapper>
  )

}));

export default DayItinerary;



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
    collapsibleHeader: {
    backgroundColor: '#e9edc9', // Light gray backgr
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0', 
    borderRadius: 15,
    gap: 5,
    //marginBottom: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    marginHorizontal: 15,
    backgroundColor: '#fcffe3',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0', 
    borderTopWidth: 0, 
  },
});
