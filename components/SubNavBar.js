import React,{ useState } from "react";
import { AppBar, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ExitDropdown from "./ExitDropdown";

function SubNavBar(props) {
    const { navigation } = props
    const [exitDropdownVisible, setExitDdVisibility] = useState(false);

    function ExitDdVisibility(value) {
        setExitDdVisibility(value)
      }

    return (
        <>
            <AppBar style={[s.pt4]}
                title="Marker Details"

                leading={props => (
                    <IconButton
                        icon={props => <AntDesign name="back" size={36} color="white" />}
                        color="primary"
                        onPress={() => navigation.navigate('Home')}
                    />
                )}

                trailing={props => (
                    <IconButton
                        icon={props => <Icon name="dots-vertical" {...props} />} {...props}
                        onPress={() => setExitDdVisibility(!exitDropdownVisible)}
                    />
                )}
            />
            {exitDropdownVisible ? <ExitDropdown changeState={ExitDdVisibility} /> : <></>}
        </>
    )
}

export default SubNavBar;