import React from "react";
import { ListItem } from "@react-native-material/core";
import { View, BackHandler } from "react-native";

function ExitDropdown({ changeState }) {
    return (
        <View style={{ marginLeft: '60%', height: 50, width: '40%' }}>
            <ListItem title="Exit" onPress={() => {changeState(false), BackHandler.exitApp()}} />
        </View>
    )
}

export default ExitDropdown;