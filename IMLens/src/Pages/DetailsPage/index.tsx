import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, increment} from '../../store/actions/cart';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Icon} from 'react-native-vector-icons/Icon';
// import {Icon} from 'react-native-elements';

const ProductDescription = ({navigation}: any) => {
  // Replace these with actual product data
  const product = {
    title: 'Sample Product',
    description:
      'This is a sample product description. Replace this with your product details.',
    image: require('../../Assets/Chair.jpeg'), // Replace with the actual image source
  };

  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state: any) => state.getProductData.getProductDetailsData,
  );
  const route = useRoute();
  // const { data } = route.params;
  console.log('qwerty', route.params?.data);
  // const {data} = navigation.params;
  const amount = parseInt(
    route.params?.data?.Amt.substring(0, route.params?.data?.Amt.length - 2),
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cart');
          }}
          style={styles.backButton}>
          <Image
            source={require('../../Assets/backbutton.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.productContent}>
        <Image
          source={{uri: route.params?.data?.URL}}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
          {route.params?.data?.ProductName}
        </Text>
        <Text style={styles.productDescription}>
          {route.params?.data?.Description}
        </Text>
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
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  productContent: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200, // Customize the image height
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  counterButtons: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
});

export default ProductDescription;
