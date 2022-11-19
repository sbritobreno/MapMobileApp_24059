import React, { useState } from "react";
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from 'react-native';

function Dropdown({ changeState, changeVisibilityState }) {
    const [placeTypes, setPlaceTypes] = useState([]);

    loadPlaceTypes()

    function loadPlaceTypes() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json')
            .then(response => response.json())
            .then(data => setPlaceTypes(data))
    }

    return (
        <View style={{ height: 250, width: 200 }}>
            <ScrollView>
                <ListItem title="All Place Types" onPress={() => { changeVisibilityState(false), changeState(0) }} />
                {placeTypes.map((placeType, index) => (
                    <ListItem
                        key={index}
                        title={placeType.name}
                        onPress={() => { changeVisibilityState(false), changeState(placeType.id) }} >
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}

export default Dropdown;