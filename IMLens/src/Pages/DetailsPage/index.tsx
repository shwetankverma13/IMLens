import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Icon} from 'react-native-vector-icons/Icon';
// import {Icon} from 'react-native-elements';

const ProductDescription = ({navigation}: any) => {
  // Replace these with actual product data
  const product = {
    title: 'Sample Product',
    description:
      'This is a sample product description. Replace this with your product details.',
    image: require('IMLens/src/Assets/Chair.jpeg'), // Replace with the actual image source
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Button icon="alpha-i" children={undefined} />
        </TouchableOpacity>
      </View>
      <View style={styles.productContent}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
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
});

export default ProductDescription;
