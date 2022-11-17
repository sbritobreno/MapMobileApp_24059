import React from 'react';
import { styles as s } from 'tachyons-react-native'
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Map = () => (
    <MapView
        style={styles.map}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    />
);

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;