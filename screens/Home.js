import React from "react";
import Markers from '../components/Markers';
import Map from "../components/Map";
import NavBar from '../components/NavBar';

function HomeScreen(props) {
    return (
        <>
            <NavBar/>
            <Map nav={props.navigation}>
                <Markers/>
            </Map>
        </>
    );
}

export default HomeScreen;