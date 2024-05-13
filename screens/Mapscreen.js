import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import Map from '../components/Map';
import tw from 'twrnc';
import NavigateCard from '../components/NavigateCard';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
const Mapscreen = () => {
  const Stack = createStackNavigator();
    return (
      <View>
        
        <View style={tw `h-1/2`}>
          <Map />
        </View>
        <View style={tw `h-1/2`}>
           <Stack.Navigator>
            < Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
            />
           </Stack.Navigator>
        </View>
      </View>

    );
  };

export default Mapscreen;

const styles = StyleSheet.create({});
