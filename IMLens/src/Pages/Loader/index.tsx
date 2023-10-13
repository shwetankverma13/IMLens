import React, {useState, useEffect, useMemo} from 'react';
import {Text, Image, StyleSheet, Animated} from 'react-native';

const Loader = ({navigation}: any) => {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);

      // Automatically navigate to the landing page after 3 seconds
      navigation.navigate('landing'); // Replace 'LandingPage' with the name of your landing page screen
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, [navigation]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: loading ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [loading, fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.loader,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}>
      <Image
        source={require('../../Assets/IMLens_logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>IMagineers</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: '#1B8CDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400, // Set your desired image width
    height: 400, // Set your desired image height
    opacity: 1,
  },
  text: {
    fontSize: 30,
    marginTop: 16,
    color: 'white',
  },
});

export default Loader;
