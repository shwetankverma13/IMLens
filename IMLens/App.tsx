import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDescription from '../IMLens/src/Pages/DetailsPage/index';
import Landing from './src/Pages/Landing';

const stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="landing">
        <stack.Screen name="landing" component={Landing} />
        <stack.Screen
          name="productDescription"
          component={ProductDescription}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
