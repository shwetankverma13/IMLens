/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Button, Image, View} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import axios from 'axios';
import {getFilteredProductDetails} from '../../Actions/GetProdcutDetails';
import {ActivityIndicator} from 'react-native-paper';

const Scanning = ({navigation}: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [response, setResponse] = useState(['']);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const reference = storage().ref('/images/test/clicked-sku-images.png');

  useEffect(() => {
    console.log('prev response', response);
    if (response?.length > 1) {
      console.log('done response', response);
      navigation.navigate('filteredCatalog', {data: response});
    }
  }, [response]);

  // useEffect(() => {
  //   if (response) {
  //     console.log('done response');
  //     setNextPage(true);
  //   }
  // }, [response]);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, async response => {
      console.log('inside imgae lib');
      if (response?.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.error) {
        console.log('Image picker error: ', response?.error);
      } else {
        let imageUri = response?.uri || response?.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setClicked(true);
        // console.log(imageUri, 'imageURI');
        await reference.putFile(imageUri);
        const url = await storage()
          .ref('/images/test/clicked-sku-images.png')
          .getDownloadURL();
        // console.log(url, 'public URL');
        setUrl(url);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, async response => {
      console.log('Response =------ ', response);
      if (response?.didCancel) {
        // console.log('User cancelled camera');
      } else if (response?.error) {
        // console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response?.uri || response?.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setClicked(true);
        // console.log(imageUri, 'imageURI');
        await reference.putFile(imageUri);
        const url = await storage()
          .ref('/images/test/clicked-sku-images.png')
          .getDownloadURL();
        // console.log(url, 'public URL');
        setUrl(url);

        // Make a POST request to a URL with the payload
        // dispatch(getFilteredProductDetails(payload));
      }
    });
  };

  // console.log(selectedImage, 'selected Image');
  // console.log(response, 'fetched data');
  const handleClick = () => {
    setLoading(true);
    axios
      .post('https://imagineers-401514.el.r.appspot.com/upload_file', {
        file_url: url,
      })
      .then(response => {
        // Store the response in your state
        setResponse(response?.data.name);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <>
      {loading && <ActivityIndicator />}
      <View style={{flex: 1, justifyContent: 'center'}}>
        {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            style={{flex: 1}}
            resizeMode="contain"
          />
        )}

        <View
          style={{
            marginTop: 20,
            width: '60%',
            marginLeft: '20%',
            borderRadius: 10,
          }}>
          <Button title="Proceed" onPress={handleClick} />
        </View>

        {clicked && response?.length && !loading && (
          <View
            style={{
              marginTop: 20,
              width: '60%',
              marginLeft: '20%',
              borderRadius: 10,
            }}
          />
        )}
        <View
          style={{
            marginTop: 20,
            width: '60%',
            marginLeft: '20%',
            borderRadius: 10,
          }}>
          <Button title="Choose from Device" onPress={openImagePicker} />
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            width: '60%',
            marginLeft: '20%',
            borderRadius: 10,
          }}>
          <Button title="Open Camera" onPress={handleCameraLaunch} />
        </View>
      </View>
    </>
  );
};

export default Scanning;
