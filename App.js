import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Homescreen from './screens/Homescreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Mapscreen from './screens/Mapscreen';


//set up redux 

export default function App() {
  const Stack = createStackNavigator();
  return (

    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
          name="Homescreen" 
          component={Homescreen}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name="Mapscreen" 
          component={Mapscreen}
          options={{
            headerShown: false,
          }}
          />

     </Stack.Navigator>
     </SafeAreaProvider>
     </NavigationContainer>

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
