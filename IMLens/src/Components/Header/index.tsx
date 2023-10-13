import * as React from 'react';
import {Image, View} from 'react-native';
// import {Avatar} from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';
import styles from './styles';

const Headers = () => {
  // const _goBack = () => console.log('Went back');

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/IMLens_logo.png')}
          style={{width: 180, height: 80, opacity: 1}}
        />
      </View>
      <View style={{marginRight: '6%'}}>
        <UserAvatar
          rounded
          size={50}
          name="U s e r"
          src="IMLens/src/Assets/AvatarIcon.png"
        />
      </View>
    </View>
  );
};

export default Headers;
