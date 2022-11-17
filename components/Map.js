import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import MapMarkers from './MapMarkers';

function Map(){
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 53.3292,
                longitude: -6.2814,
                latitudeDelta: 0.422,
                longitudeDelta: 0.221,
            }}
            
        ><MapMarkers />
        </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;