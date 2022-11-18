import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function NavBar({ nav }) {
    return (
        <>
            <AppBar style={[s.pt4]}
                title="Marker Details"

                leading={props => (
                    <IconButton
                        icon={props => <AntDesign name="back" size={36} color="white" />}
                        color="primary"
                        onPress={() => nav.navigate('Home')}
                    />
                )}

                trailing={props => (
                    <IconButton
                        icon={props => <Icon name="dots-vertical" {...props} />}
                        {...props}
                    />
                )}
            />
        </>
    )
}

export default NavBar;