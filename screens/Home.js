import React, { useState } from "react";
import Map from "../components/Map";
import NavBar from '../components/NavBar';

function HomeScreen(props) {
    const { navigation } = props
    const [markersFilter, setMarkersFilter] = useState(0)

    function ChangeState(id) {
        setMarkersFilter(id)
    }

    return (
        <>
            <NavBar changeState={ChangeState} />
            <Map navigation={navigation} filter={markersFilter} />
        </>
    );
}

export default HomeScreen;