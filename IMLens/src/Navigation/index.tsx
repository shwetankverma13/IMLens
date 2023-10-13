import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../Pages/Landing';

const stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="landing">
        <stack.Screen name="landing" component={Landing} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
