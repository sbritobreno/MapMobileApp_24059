import React, { useState } from "react";
import { Marker, Callout } from 'react-native-maps';

function Markers(props) {
    const [markers, setMarkers] = useState([]);

    loadMarkersLocations()

    function loadMarkersLocations() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json')
            .then(response => response.json())
            .then(markersLocation => setMarkers(markersLocation));
    }

    function defineColor(id) {
        if (id === 1) {
            return '#100'
        } else if (id === 2) {
            return '#010'
        } else if (id === 3) {
            return '#001'
        } else if (id === 4) {
            return '#011'
        } else if (id === 5) {
            return '#110'
        } else if (id === 6) {
            return '#400'
        } else if (id === 7) {
            return '#004'
        } else if (id === 8) {
            return '#040'
        } else if (id === 9) {
            return '#440'
        } else if (id === 10) {
            return '#044'
        } else if (id === 11) {
            return '#800'
        } else if (id === 12) {
            return '#008'
        } else if (id === 13) {
            return '#080'
        } else if (id === 14) {
            return '#088'
        } else {
            return '#880'
        }
    }

    return (
        <>
            {markers.map((marker, index) => {
                return marker.place_type_id == props.filter || props.filter == 0
                    ?
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.name}
                        pinColor={defineColor(marker.place_type_id)}>
                        <Callout onPress={() => props.nav.navigate('Details', { marker: marker })} />
                    </Marker>
                    :
                    <></>
            })}
        </>
    )
}

export default Markers;