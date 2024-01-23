import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {  StyleSheet,View, Text, TouchableOpacity,Image ,Pressable,ImageBackground,SafeArray, Alert,TextInput} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

function Welcome(props){
    const {navigation,router} =props
    // function cua navigate to/back
    const {navigate,goBack}=navigation


    return(  
      
      // <View style={{flex: 1, alignItems: "center"}}>    {/* </View> */}
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"></StatusBar>
            <View>
              <ImageBackground        
          style={styles.background}
      >
             <View style={styles.form}>
                <Image
                    source={require('../assets/images/12.jpg')}
                    style={styles.logo}
                />
            </View>
            
          </ImageBackground>
              </View>
              <View style={styles.title}>
                <Text style={{fontWeight:'bold',fontSize:30,color:'black'}}></Text>

                <Text>Bằng việc đăng nhập bạn đồng ý</Text>
                <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>Alert.alert('sau nay tao lam chuyen')}>
                  <Text style={{color:'#1bcdff'}}>Điều khoản và chính sách bảo mật</Text></TouchableOpacity>
                  </View>

              </View>
    
              <View style={styles.form}>
                    <View style={styles.group}>
                        {/* <TextInput placeholder="Email Address" style={styles.ip}></TextInput> */}
                    </View>
              </View>




                                <TouchableOpacity onPress={()=>{navigate('MyTab') }}
                                  style={{
                                      backgroundColor: "#f96163",
                                      borderRadius: 18,
                                      paddingVertical: 18,
                                      width: "80%",
                                      alignItems: "center",
                                  }}>
                                      <Text style={{ fontSize: 18, color: "aqua", fontWeight: "700" }}>Đăng Nhập</Text>
                                  </TouchableOpacity>
                            
          </SafeAreaView>
                              
)        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    alignItems:'center'
  },
  title:{
    marginTop:30,
    alignItems:'center'
  },
  form:{
    marginTop:30,
    alignItems:'center'
  },
  ip:{
    borderBottomWidth:1,
    backgroundColor:'#fff',
    borderColor:'red'
  }
});
export default Welcome
