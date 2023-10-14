import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import axios from 'axios';

const Scanning = ({navigation}: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [response, setResponse] = useState(null);

  const reference = storage().ref('/images/test/clicked-sku-images.png');

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
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
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setClicked(true);
        console.log(imageUri, 'imageURI');
        await reference.putFile(imageUri);
        const url = await storage()
          .ref('/images/test/clicked-sku-images.png')
          .getDownloadURL();
        console.log(url, 'public URL');
        const payload = {file_url: url};

        // Make a POST request to a URL with the payload
        axios
          .post(
            'https://imagineers-401514.el.r.appspot.com/upload_file',
            payload,
          )
          .then(response => {
            // Store the response in your state
            setResponse(response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
      }
    });
  };

  console.log(selectedImage, 'selected Image');
  console.log(response, 'fetched data');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      {clicked && !response && (
        <View
          style={{
            marginTop: 20,
            width: '60%',
            marginLeft: '20%',
            borderRadius: 10,
          }}>
          <Button
            title="Proceed"
            onPress={() => navigation.navigate('catalog')}
          />
        </View>
      )}
      {clicked && response && (
        <View
          style={{
            marginTop: 20,
            width: '60%',
            marginLeft: '20%',
            borderRadius: 10,
          }}>
          <Button
            title="Proceed"
            onPress={() =>
              navigation.navigate('filteredCatalog', {data: response})
            }
          />
        </View>
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
  );
};

export default Scanning;
