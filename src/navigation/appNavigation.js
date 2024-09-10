import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TripList from '../mvc_trips/Views/TripList';
import TripDetails from '../screens/TripDetails';
import DayItinerary from '../screens/DayItinerary';
import AddTrip from '../mvc_trips/Views/AddTrip';
import AddActivity from '../screens/AddActivity';
import AddTransport from '../screens/AddTransport';
import LocationSearchScreen from '../screens/LocationSearchScreen';
import LocationMapScreen from '../screens/LocationMapScreen';
import ActivityDetailsScreen from '../screens/ActivityDetails';
import TransportDetailsScreen from '../screens/TransportDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name ="Home" component={HomeScreen} />
        <Stack.Screen name="TripList" component={TripList} options={{ title: 'My Trips' }}/>
        <Stack.Screen name="TripDetails" component={TripDetails} options={{ title: 'Trip Details' }}/>
        <Stack.Screen name="DayItinerary" component={DayItinerary} options={{ title: 'Day Itinerary' }}/>
        <Stack.Screen name="AddTrip" component={AddTrip} options={{ title: 'Add New Trip' }}/>
        <Stack.Screen name="AddActivity" component={AddActivity} options={{ title: 'Add New Activity' }}/>
        <Stack.Screen name="ActivityDetailsScreen" component={ActivityDetailsScreen} options={{ title: 'Activity Details' }}/>
        <Stack.Screen name="AddTransport" component={AddTransport} options={{ title: 'Add New Transport' }}/>
        <Stack.Screen name="LocationSearchScreen" component={LocationSearchScreen} options={{ title: 'Location Search' }}/>
        <Stack.Screen name="LocationMapScreen" component={LocationMapScreen} options={{ title: 'Location Map' }}/>
        <Stack.Screen name="TransportDetailsScreen" component={TransportDetailsScreen} options={{ title: 'Transport Details' }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}