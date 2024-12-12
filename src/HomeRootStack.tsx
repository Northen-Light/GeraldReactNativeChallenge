// In screens.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YourCartScreen from './screens/YourCartScreen.tsx';
import StartScreen from './screens/StartScreen.tsx';
import FavouriteScreen from './screens/FavouriteScreen.tsx';
import YourOrdersScreen from './screens/YourOrdersScreen.tsx';
import SignOutScreen from './screens/SignOutScreen.tsx';

const Stack = createNativeStackNavigator();

export const SCREEN_NAMES = {
  YOUR_CART: 'Your Cart',
  FAVOURITES: 'Favourites',
  YOUR_ORDERS: 'Your Orders',
  SIGN_OUT: 'Sign Out',
  START: 'Start',
};

// Derive a union type from the values of SCREEN_NAMES
export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES];

export default function HomeRootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.START} component={StartScreen} />
      <Stack.Screen name={SCREEN_NAMES.YOUR_CART} component={YourCartScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.FAVOURITES}
        component={FavouriteScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.YOUR_ORDERS}
        component={YourOrdersScreen}
      />
      <Stack.Screen name={SCREEN_NAMES.SIGN_OUT} component={SignOutScreen} />
    </Stack.Navigator>
  );
}
