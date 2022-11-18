import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from 'react-native';

function NavBar() {
  const [dropdownVisible, setVisibility] = useState(false);
  const [exitDropdownVisible, setExitDdVisibility] = useState(false);
  const [filter, setFilter] = useState(0)

  function ExitDropdown() {
    return (
      <View style={{ marginLeft: '60%', height: 50, width: '40%' }}>
        <ListItem title="Exit" onPress={() => setExitDdVisibility(false)} />
      </View>
    )
  }

  function Dropdown() {
    return (
      <View style={{ height: 250, width: 200 }}>
        <ScrollView>
          <ListItem title="All Place Type" onPress={() => { setVisibility(false), setFilter(0) }} />
          <ListItem title="Place Type 1" onPress={() => { setVisibility(false), setFilter(1) }} />
          <ListItem title="Place Type 2" onPress={() => { setVisibility(false), setFilter(2) }} />
          <ListItem title="Place Type 3" onPress={() => { setVisibility(false), setFilter(3) }} />
          <ListItem title="Place Type 4" onPress={() => { setVisibility(false), setFilter(4) }} />
          <ListItem title="Place Type 5" onPress={() => { setVisibility(false), setFilter(5) }} />
          <ListItem title="Place Type 6" onPress={() => { setVisibility(false), setFilter(6) }} />
          <ListItem title="Place Type 7" onPress={() => { setVisibility(false), setFilter(7) }} />
          <ListItem title="Place Type 8" onPress={() => { setVisibility(false), setFilter(8) }} />
          <ListItem title="Place Type 9" onPress={() => { setVisibility(false), setFilter(9) }} />
          <ListItem title="Place Type 10" onPress={() => { setVisibility(false), setFilter(10) }} />
          <ListItem title="Place Type 11" onPress={() => { setVisibility(false), setFilter(11) }} />
          <ListItem title="Place Type 12" onPress={() => { setVisibility(false), setFilter(12) }} />
          <ListItem title="Place Type 13" onPress={() => { setVisibility(false), setFilter(13) }} />
          <ListItem title="Place Type 14" onPress={() => { setVisibility(false), setFilter(14) }} />
          <ListItem title="Place Type 15" onPress={() => { setVisibility(false), setFilter(15) }} />
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
            onPress={() => {setVisibility(!dropdownVisible), setExitDdVisibility(false)}} />
        )}

        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="magnify" {...props} />}
              {...props}/>
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />}
              {...props} onPress={() => {setExitDdVisibility(!exitDropdownVisible), setVisibility(false)}}/>
          </HStack>
        )}
      />
      {exitDropdownVisible ? <ExitDropdown /> : <></>}
      {dropdownVisible ? <Dropdown /> : <></>}
    </>
  )
}

export default NavBar;