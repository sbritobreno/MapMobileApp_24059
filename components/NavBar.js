import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from 'react-native';
import SearchBar from 'react-native-material-design-searchbar';


function NavBar({ changeState }) {
  const [dropdownVisible, setVisibility] = useState(false);
  const [exitDropdownVisible, setExitDdVisibility] = useState(false);
  const [searchBarVisible, setSearchBarVisibility] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(0)


  function SearchBarComp() {
    const onChangeSearch = query => setSearchQuery(query);

    return (
      <View style={{ marginLeft: '10%', width: '80%' }}>
        <SearchBar
          onSearchChange={onChangeSearch}
          height={50}
          placeholder={'Search...'}
          autoCorrect={false}
          padding={5}
          returnKeyType={'search'}
          inputStyle={{ borderRadius: 50, backgroundColor: 'white' }} />
      </View>
    )
  }

  function ExitDropdown() {
    return (
      <View style={{ marginLeft: '60%', height: 50, width: '40%' }}>
        <ListItem title="Exit" onPress={() => setExitDdVisibility(false)} />
      </View>
    )
  }

  function Dropdown() {
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
          <ListItem title="All Place Types" onPress={() => { setVisibility(false), setFilter(0) }} />
          {placeTypes.map((placeType, index) => (
            <ListItem
              key={index}
              title={placeType.name}
              onPress={() => { setVisibility(false), changeState(placeType.id) }} >
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <>
      <AppBar style={[s.pt4]}
        title="MapMobileApp"

        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props}
            onPress={() => { setVisibility(!dropdownVisible), setExitDdVisibility(false), setSearchBarVisibility(false) }} />
        )}

        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="magnify" {...props} />} {...props}
              onPress={() => { setSearchBarVisibility(!searchBarVisible), setExitDdVisibility(false), setVisibility(false) }} />
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />} {...props}
              onPress={() => {
                setExitDdVisibility(!exitDropdownVisible), setVisibility(false),
                setSearchBarVisibility(false)
              }} />
          </HStack>
        )}
      />
      {searchBarVisible ? <SearchBarComp /> : <></>}
      {exitDropdownVisible ? <ExitDropdown /> : <></>}
      {dropdownVisible ? <Dropdown /> : <></>}
    </>
  )
}

export default NavBar;