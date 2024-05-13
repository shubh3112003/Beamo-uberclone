import React from 'react'
import { StyleSheet , Text , View } from 'react-native'
import tw from 'twrnc'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navslice'
const Map = () =>{
const origin = useSelector(selectOrigin)

    return (
        <MapView
        style={tw `flex-1`}
       // mapType="mutedStandard"
        initialRegion={{
            latitude: 21.146633,
            longitude: 79.088860,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}
        >
            <Marker 
            coordinate={{
                latitude: 21.146633,
                longitude: 79.088860,
            }}
            title="origin"
            description="Nagpur Railway station"
            identifier="Origin"/>
            </MapView>

    )
}
export default Map
const styles = StyleSheet.create({});
