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
        <Text style={styles.subtitle}>Your Catchy Subtitle Here</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('productDescription')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Landing;
