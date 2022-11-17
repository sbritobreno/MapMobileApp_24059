import { StatusBar } from 'expo-status-bar';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import MarkerDetails from './components/MarkerDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <NavBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MarkerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
