import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/General/screenWrapper';
import styles from '../style/generalStyle';


export default function HomeScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.headContainer}>
            <Text style={styles.headline}>Travel Planner</Text>
        </View>
        
      <View style={styles.contentContainer}>
         <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/travel-illustration.png')}
                style={styles.image}
              />
          </View> 
          <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TripList')}>
                <Text style={styles.buttonText}>
                  Start planning
                </Text>
              </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    </ScreenWrapper>
  )
}