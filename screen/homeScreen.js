
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Header,Content,Footer} from "../component"


function HomeScreen(props){
    return <View style={{
        flex:100
      }}>
        
      <Header />
      <Content />
      {/* <Footer /> */}
  
      </View>
}
export default HomeScreen