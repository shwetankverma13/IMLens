import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDescription from '../IMLens/src/Pages/DetailsPage/index';
import Landing from './src/Pages/Landing';
import SuccessPage from './src/Pages/Success';
import CatalogPage from './src/Pages/Catalogue';
import Loader from './src/Pages/Loader';
import Cart from './src/Pages/Cart';
import store from './src/store/store';
import {Provider} from 'react-redux';
import Scanning from './src/Pages/Scanning';
import FilteredCatalogPage from './src/Pages/FilteredCatalogue';

const stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="loader">
          <stack.Screen name="loader" component={Loader} />
          <stack.Screen name="landing" component={Landing} />
          <stack.Screen name="Scanning" component={Scanning} />
          <stack.Screen
            name="productDescription"
            component={ProductDescription}
          />
          <stack.Screen name="catalog" component={CatalogPage} />
          <stack.Screen name="successPage" component={SuccessPage} />
          <stack.Screen name="cart" component={Cart} />
          <stack.Screen
            name="filteredCatalog"
            component={FilteredCatalogPage}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
