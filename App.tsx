import React from 'react';
import HomeRootStack from './src/HomeRootStack.tsx';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from './src/screens/ContactScreen.tsx';

const Tab = createBottomTabNavigator();

function TabNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeRootStack} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigationContainer;
