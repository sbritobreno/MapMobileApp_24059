import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles as s } from 'tachyons-react-native'

const NavBar = () => (
  <AppBar style={[ s.pt4 ]}
    title="MapMobileApp"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);

export default NavBar;