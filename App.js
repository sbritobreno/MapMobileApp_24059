import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles as s } from 'tachyons-react-native'
import Map from './components/Map';

import NavBar from './components/NavBar';

export default function App() {
  return (
    <View >
      <NavBar />
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}
