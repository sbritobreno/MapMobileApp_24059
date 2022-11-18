import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import { mapStyle } from '../utils/MapStyle';
import MapView from 'react-native-maps';
import Markers from '../components/Markers';
import Map from "../components/Map";

function HomeScreen(props) {
    return (
        <Map nav={props.navigation}>
            <Markers/>
        </Map>
    );
}

export default HomeScreen;