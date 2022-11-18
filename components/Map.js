import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import { mapStyle } from '../utils/MapStyle'
import MapView from 'react-native-maps';
import Markers from '../components/Markers'

function Map(props){
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
        ><Markers nav={props.nav}/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;