import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import Home from './Screen/drawerScreens/Home';
import Details from './Screen/drawerScreens/Details';
import ForgetPassword from './Screen/ForgetPassword';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          //headerLeft: null,
          headerShown: false,
          headerTintColor: '#ffff',
          headerStyle: {
            backgroundColor: '#003f5c',
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          //headerLeft: null,
          headerShown: false,
          headerTintColor: '#ffff',
          headerStyle: {
            backgroundColor: '#003f5c',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTintColor: '#ffff',
          headerLeft: null,
          headerTransparent: false,
          headerStyle: {
            backgroundColor: '#003f5c',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
          headerTintColor: '#ffff',
          headerStyle: {
            backgroundColor: '#003f5c',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
