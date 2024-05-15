import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/homeScreen";
import SearchScreen from "../screens/searchScreen";
import ConfigScreen from "../screens/configScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'Config') {
                iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Busca') {
                iconName = focused ? 'search' : 'search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: '#1D5871',
        inactiveTintColor: 'gray',
    }}
    initialRouteName="Home"
    >
      <Tab.Screen name="Busca" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;