import React, { useState } from "react";
import { Marker, Callout } from 'react-native-maps';
import DefineMarkerColor from "../utils/DefineMarkerColor";

function Markers(props) {
    const { navigation, filter } = props
    const [markers, setMarkers] = useState([])

    loadMarkersLocations()

    function loadMarkersLocations() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json')
            .then(response => response.json())
            .then(markersLocation => setMarkers(markersLocation));
    }

    return (
        <>
            {markers.map((marker, index) => {
                return marker.place_type_id == filter || filter == 0
                    ?
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.name}
                        pinColor={DefineMarkerColor(marker.place_type_id)}>
                        <Callout onPress={() => navigation.navigate('Details', { marker: marker })} />
                    </Marker>
                    :
                    <React.Fragment key={index}></React.Fragment>
            })}
        </>
    )
}

export default Markers;