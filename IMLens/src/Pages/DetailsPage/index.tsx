import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cart';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Icon} from 'react-native-vector-icons/Icon';
// import {Icon} from 'react-native-elements';

const ProductDescription = ({navigation}: any) => {
  const dispatch = useDispatch();
  const route = useRoute();
  // const { data } = route.params;
  console.log('qwerty', route.params?.data);
  // const {data} = navigation.params;
  const amount = parseInt(
    route.params?.data?.Amt.substring(0, route.params?.data?.Amt.length - 2),
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('catalog');
            }}
            style={styles.backButton}>
            <Image
              source={require('../../Assets/backbutton.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={{uri: route.params?.data?.URL}}
            style={styles.productImage}
          />
          {/* <Image source={{uri: product.imageURL}} style={styles.image} /> */}
          <Text style={styles.title}>{route.params?.data?.ProductName}</Text>
          <Text style={styles.price}>Price: ₹{route.params?.data?.Amt}</Text>
          <Text style={styles.description}>
            {route.params?.data?.Description}
          </Text>
          <Text style={styles.title2}>SKU-ID: {route.params?.data?.SKU}</Text>
          <Text style={styles.title2}>
            Category: {route.params?.data?.Category}
          </Text>
          <Text style={styles.title2}>{route.params?.data?.Labels}</Text>
        </View>
        <TouchableOpacity
          style={styles.counterButtons}
          onPress={() => {
            dispatch(
              addItem(
                route.params?.data?.SKU,
                route.params?.data?.URL,
                amount,
                route.params?.data?.ProductName,
                amount,
                1,
              ),
            );
            navigation.navigate('cart');
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#3498db',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  backButtonText: {
    color: 'white', // Customize the button text color
    fontSize: 16,
  },
  productImage: {
    width: '100%',
    height: 260, // Customize the image height
    resizeMode: 'cover',
  },
  counterButtons: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#3498db',
    marginBottom: '5%',
    width: '40%',
    alignItems: 'center',
    display: 'flex',
    marginLeft: '30%',
    marginTop: '5%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    padding: 16,
    margin: 16,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  title2: {
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: '5%',
  },
  price: {
    fontSize: 18,
    color: '#007bff',
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: '5%',
  },
});

export default ProductDescription;
