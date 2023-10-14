import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Headers from '../../Components/Header';

function Landing({navigation}: any): JSX.Element {
  return (
    <>
      <Headers />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to IMLens</Text>
        {/* <Text style={styles.subtitle}>
          Imagine a shopping experience like never before, where you can
          effortlessly discover your desired products by simply uploading an
          image. Our system allows customers to find exact or similar products
          from our store inventory without the need for keywords or category
          searches. Welcome to a store that truly understands you – welcome to
          IMLens, the future of online shopping.
        </Text> */}
        <Text style={styles.subtitle}>
          "Transforming Scans into Perfect Plans."
        </Text>
        <View style={{marginBottom: '20%'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Scanning')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Landing;
