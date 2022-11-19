import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Dropdown from "./Dropdown";
import ExitDropdown from "./ExitDropdown";
import SearchBarComp from "./SearchBar";


function NavBar({ changeState }) {
  const [dropdownVisible, setDdVisibility] = useState(false);
  const [exitDropdownVisible, setExitDdVisibility] = useState(false);
  const [searchBarVisible, setSearchBarVisibility] = useState(false);

  // const [searchQuery, setSearchQuery] = useState('');
  // const [filter, setFilter] = useState(0)

  function DropdownVisibility(value) {
    setDdVisibility(value)
  }
  function ExitDdVisibility(value) {
    setExitDdVisibility(value)
  }
  function SearchBarVisibility(value) {
    setSearchBarVisibility(value)
  }

  return (
    <>
      <AppBar style={[s.pt4]}
        title="MapMobileApp"

        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props}
            onPress={() => { setDdVisibility(!dropdownVisible), setExitDdVisibility(false), setSearchBarVisibility(false) }} />
        )}

        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="magnify" {...props} />} {...props}
              onPress={() => { setSearchBarVisibility(!searchBarVisible), setExitDdVisibility(false), setDdVisibility(false) }} />
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />} {...props}
              onPress={() => { setExitDdVisibility(!exitDropdownVisible), setDdVisibility(false), setSearchBarVisibility(false) }} />
          </HStack>
        )}
      />
      {dropdownVisible ? <Dropdown changeState={changeState} changeVisibilityState={DropdownVisibility} /> : <></>}
      {exitDropdownVisible ? <ExitDropdown changeState={ExitDdVisibility} /> : <></>}
      {searchBarVisible ? <SearchBarComp changeState={SearchBarVisibility} /> : <></>}
    </>
  )
}

export default NavBar;