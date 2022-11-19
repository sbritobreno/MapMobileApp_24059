import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Dropdown from "./Dropdown";
import ExitDropdown from "./ExitDropdown";


function NavBar({ changeState }) {
  const [dropdownVisible, setDdVisibility] = useState(false);
  const [exitDropdownVisible, setExitDdVisibility] = useState(false);

  function DropdownVisibility(value) {
    setDdVisibility(value)
  }
  function ExitDdVisibility(value) {
    setExitDdVisibility(value)
  }

  return (
    <>
      <AppBar style={[s.pt4]}
        title="MapMobileApp"

        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props}
            onPress={() => { setDdVisibility(!dropdownVisible), setExitDdVisibility(false) }} />
        )}

        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />} {...props}
              onPress={() => { setExitDdVisibility(!exitDropdownVisible), setDdVisibility(false) }} />
          </HStack>
        )}
      />
      {dropdownVisible ? <Dropdown changeState={changeState} changeVisibilityState={DropdownVisibility} /> : <></>}
      {exitDropdownVisible ? <ExitDropdown changeState={ExitDdVisibility} /> : <></>}
    </>
  )
}

export default NavBar;