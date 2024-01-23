  import React, { useState } from 'react';
  import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  function ProductDetail({ route }) {
    const navigation = useNavigation();
    const { name, url, price } = route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
      setQuantity(Math.max(1, quantity - 1));
    };

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ borderWidth: 2, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white' }}>
          <Image source={{ uri: url }} style={{ height: 200, width: '100%', resizeMode: 'cover' }} />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{name}</Text>
            <Text style={{ fontSize: 18, color: 'green', marginBottom: 10 }}>VND {price}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Text style={{ color: 'blue', fontSize: 24 }}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={{ height: 40, width: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10, textAlign: 'center', fontSize: 18 }}
                value={quantity.toString()}
                keyboardType="numeric"
                onChangeText={(newQuantity) => setQuantity(parseInt(newQuantity) || 0)}
              />
              <TouchableOpacity onPress={increaseQuantity}>
                <Text style={{ color: 'blue', fontSize: 24 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            // Chuyển dữ liệu sang trang Cart
            navigation.navigate('Cart', { name, url, price, quantity });
          }}
          style={{
            backgroundColor: '#3498db',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            marginTop: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
  }

  export default ProductDetail;