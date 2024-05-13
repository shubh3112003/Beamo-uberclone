import React, { Component } from 'react'
import { Text, StyleSheet, View , SafeAreaView , Image} from 'react-native'
import tw, { style } from 'twrnc';
import Navoptions from '../components/Navoptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { RAPIDAPIKEY } from "@env";
const Homescreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-15`}>
            <Image
            style={{
                width: 100, height:100,resizeMode:"contain",
            }}
                source={{
                    
                    uri: "https://www.logodesign.net/images/how-to-design-social-media-app-logo-icon-tutorial-header.jpg",
                }}
            
            />

             <GooglePlacesAutocomplete 
             placeholder="Where From?"
             styles={{
                container: {
                    flex: 0,
                },
                textInput:{
                    fontSize: 18,
                }
             }}
             query={{
                key: RAPIDAPIKEY,
                langauge: "en"
             }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
/>
            <Navoptions />
        </View>
    </SafeAreaView>
  )
}
export default Homescreen
const styles = StyleSheet.create({
    text:{
        color:"blue",
    },
})
