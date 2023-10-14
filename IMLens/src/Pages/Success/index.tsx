import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const SuccessPage = ({navigation}: any) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginLeft: '90%',
          marginTop: '5%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('landing');
          }}>
          <Image
            source={require('../../Assets/close.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginLeft: '25%',
          marginTop: '10%',
          fontSize: 20,
          fontWeight: '700',
        }}>
        Booked Successfully!!
      </Text>
      <Image
        source={require('../../Assets/bookedScreen.png')} // Specify the path to your image
        style={{
          width: 300,
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20%',
          marginLeft: '5%',
        }} // Adjust the width and height as needed
      />
    </View>
  );
};

export default SuccessPage;
