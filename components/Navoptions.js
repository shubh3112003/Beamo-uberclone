import React from 'react'
import { FlatList, ImageComponent } from 'react-native';
import { Text, TouchableOpacity, View , Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const data =[{
id: "123", 
title: "Order food",
image: "https://cdn.dribbble.com/userupload/5966432/file/original-03c1fe57f7907074905632cbf187f058.png?resize=400x0", // Change in future...
},
{
id: "456", 
title: "get a ride",
image: "https://www.shutterstock.com/image-vector/taxi-service-badge-sign-yellow-260nw-2071076240.jpg",
 screen: "Mapscreen", // Change in future...
},
];

const Navoptions = () => { 

    const navigation =useNavigation();

    return (
    <FlatList
         data={data}
         keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View> 
                <Image style={{width:120,height:120, resizeMode: "container"}}
                source={{uri: item.image }}
                />
                <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                style={tw `p-2 bg-black rounded-full w-10 mt-4` }
                name="arrowright" color="white" type="antdesign"/>

                
                </View>
         
        </TouchableOpacity>
        )}
       />
    );
};

export default Navoptions;