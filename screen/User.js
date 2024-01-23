import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
function User(props){
    return (<View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      backgroundColor:'yellow',
      justifyContent:'center',
      alignItems:'center'
    }}   >
      <Text style={{
        color:"black",
        backgroundColor:'green'}}>Mở ứng dụng</Text>
      
    </View>);
}
export default User