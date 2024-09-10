import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

const MapViewComponent = () => {
  const location = useSelector(state => state.location.location);

  if (!location || !location.latitude || !location.longitude) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapViewComponent;
