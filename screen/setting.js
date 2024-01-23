import React, { useState } from "react";

import { Text,ScrollView,Switch, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5"
function Setting(props){
  
  const [isEnabledLockApp,setEnabledLockApp]=useState(true)
    
    const[isEnabledChangePassword,setEnabledChangePassword]=useState(true)
    const[isUseFingerprint,setUseFingerprint]=useState(true)

    return (
      <View style={{
        flex: 1,
    }}>
       
       <Text>setting</Text>
    </View>);
}
export default Setting