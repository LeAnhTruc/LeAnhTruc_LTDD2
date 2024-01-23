import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from "react-native";
import axios from 'axios';

function Content() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

    const getApi = () => {
    return fetch('https://65af93c52f26c3f2139b2e06.mockapi.io/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially set filtered products to all products
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getApi();
  }, []);

  
  // Function to filter products based on search text
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = products.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  }
  

  return (
    <View style={{ width: '100%', backgroundColor: 'white', flex: 70 }}>

<View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
<TextInput
  style={{
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginStart: 10,
    paddingLeft: 10,
    backgroundColor: '#f0f0f0', // Example background color
    borderRadius: 8,
  }}
  placeholder="Search..."
  value={searchText}
  onChangeText={handleSearch}
/>
      </View>

      <FlatList
        keyExtractor={(item) => item.name}
        data={filteredProducts}
        numColumns={1}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productDetail', {
                name: item.title,
                url: item.image,
                price: item.price,
                // Thêm hàm addToCart vào navigation params
              })
            }
            style={{
              flex: 1,
              marginLeft: index % 2 === 0 ? 8 : 2,
              marginTop: 5,
              marginRight: index % 2 === 0 ? 2 : 8,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#ddd', // Example border color
              backgroundColor: 'white', // Example background color
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
  source={{ uri: item.image }}
  style={{
    height: 100,
    width: '50%', // Example width
    borderRadius: 10,
    margin: 10,
    resizeMode: 'cover', // or 'contain' based on your preference
  }}
/>
              <Text style={{ color: 'red', marginStart: 10 }}>
                ${item.price}
              </Text>
            </View>
            <Text style={{ color: 'black' }}>{item.title}</Text>
            <View style={{ flex: 1 }}>
              <View style={{ height: 30 }}></View>
              
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Content;