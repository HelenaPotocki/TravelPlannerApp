import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setLocation } from '../redux_location/actions';

export default function LocationSearchScreen({ navigation }) {

    const dispatch = useDispatch();

    const handleLocationSelect = (data, details = null) => {
       const location = {
            name: data.description,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
        };
        dispatch(setLocation(location)); 
        navigation.goBack(); 
    };

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search for a location'
                onPress={ handleLocationSelect}
                query={{
                    key: 'AIzaSyBHrC5U8JzEAyaeCf1lSGEP2dnoXvS14Pk',
                    language: 'en',
                }}
                fetchDetails={true}
                styles={{
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInput,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInputContainer: {
        width: '100%',
    },
    textInput: {
        height: 44,
        color: '#5d5d5d',
        fontSize: 16,
    },
});
