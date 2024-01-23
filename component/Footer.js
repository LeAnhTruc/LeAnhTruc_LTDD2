import React from "react";
import {View,Text,TouchableOpacity} from "react-native"

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();
function Footer(props){
    return(
        <View style={{
            marginVertical:20,
            width:'100%',
            flex:10,
            backgroundColor:"blue",
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Footer</Text>
            
          </View>

    ); 
}
export default Footer