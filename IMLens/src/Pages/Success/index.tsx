import React from 'react';
import {Image, Text, View} from 'react-native';

const SuccessPage = () => {
  return (
    <View>
      <Text
        style={{
          marginLeft: '20%',
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
        }} // Adjust the width and height as needed
      />
    </View>
  );
};

export default SuccessPage;
