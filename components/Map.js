import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import { mapStyle } from '../utils/MapStyle'
import MapView from 'react-native-maps';
import Markers from '../components/Markers'

function Map({ nav, filter }) {
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
        ><Markers nav={nav} filter={filter} />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
});

export default Map;