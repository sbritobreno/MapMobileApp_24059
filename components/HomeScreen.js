import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import MapMarkers from './MapMarkers';
import { mapStyle } from '../utils/MapStyle'

function HomeScreen({ navigation }) {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 53.3292,
                longitude: -6.2814,
                latitudeDelta: 0.422,
                longitudeDelta: 0.221,
            }}
            customMapStyle={mapStyle}
        ><MapMarkers nav={navigation}/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default HomeScreen;