//rgba(0,0,0,0.2)->inactive
import React from "react";
import {View,Text,TouchableOpacity,Image,TextInput} from "react-native"

import Swiper from "react-native-swiper";

function Header(props){
    return (<View style={{
      marginTop:60,
      flex:20,
      width:'100%',
      marginBottom:10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}   >


      <View style={{ width:400, flex:1,}}>
        <Swiper showsHorizontalScrollIndicator>

          <Image source={require('../assets/images/12.jpg')} style={{ marginLeft:1, width:600,flex:1,}}/>

          <Image source={require('../assets/images/12.jpg')} style={{ marginLeft:1, width:600,flex:1,}}/>

        </Swiper>
      </View>
      {/* 
      <Text style={{
        color: "black",
        backgroundColor: 'green'
      }}> up App</Text> */}



    </View>);
}
export default Header
