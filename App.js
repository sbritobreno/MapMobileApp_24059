import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles as s } from 'tachyons-react-native'

import NavBar from './components/NavBar';

export default function App() {
  return (
    <View >
      <NavBar />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
