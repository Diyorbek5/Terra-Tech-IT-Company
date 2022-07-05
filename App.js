import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import Menu from './src/view/screens/Menu';
import Contact from './src/view/screens/Contact';
import About from './src/view/screens/About';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/src/screens'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{header: () => null}}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
