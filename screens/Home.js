import React, { useState } from "react";
import Map from "../components/Map";
import NavBar from '../components/NavBar';

function HomeScreen(props) {
    const [markersFilter, setMarkersFilter] = useState(0)

    function ChangeState(id) {
        setMarkersFilter(id)
    }

    return (
        <>
            <NavBar changeState={ChangeState} />
            <Map nav={props.navigation} filter={markersFilter} />
        </>
    );
}

export default HomeScreen;