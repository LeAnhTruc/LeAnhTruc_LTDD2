import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';

function Cart({ route, navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route.params && route.params.name) {
      const { name, url, price, quantity } = route.params;
      const newItem = { name, url, price, quantity };
      setCartItems([...cartItems, newItem]);
    }
  }, [route.params]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };




  const updateQuantity = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const increaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = Math.max(1, newCartItems[index].quantity - 1);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    // Xử lý thanh toán ở đây, ví dụ hiển thị thông báo và xóa giỏ hàng
    Alert.alert('Thanh toán thành công', `Tổng cộng: VND${calculateTotal()}`, [
      { text: 'OK', onPress: () => setCartItems([]) },
    ]);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Giỏ hàng
        </Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => removeFromCart(index)} style={{ marginRight: 10 }}>
                <Text style={{ color: 'red', fontSize: 20 }}>X</Text>
              </TouchableOpacity>
              <Image source={{ uri: item.url }} style={{ width: 80, height: 80, borderRadius: 10, marginRight: 10 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: '#777', marginBottom: 5 }}>Price: ${item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                    <Text style={{ color: 'blue', fontSize: 20, marginRight: 5 }}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5, textAlign: 'center', fontSize: 16 }}
                    value={item.quantity.toString()}
                    onChangeText={(newQuantity) => updateQuantity(index, parseInt(newQuantity))}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity onPress={() => increaseQuantity(index)}>
                    <Text style={{ color: 'blue', fontSize: 20, marginLeft: 5 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Tổng tiền: VND{calculateTotal()}
          </Text>
          <TouchableOpacity
            onPress={handleCheckout}
            style={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              height: 40,
              width: 150,
            }}
          >
            <Text style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Cart;