import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDescription from '../IMLens/src/Pages/DetailsPage/index';
import Landing from './src/Pages/Landing';
import SuccessPage from './src/Pages/Success';
import CatalogPage from './src/Pages/Catalogue';
// import Landing from './src/Pages/Landing';

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
        <stack.Screen name="catalog" component={CatalogPage} />
        <stack.Screen name="successPage" component={SuccessPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
