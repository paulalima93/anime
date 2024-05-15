import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from "../screens/registerScreen";
import BottomTabNavigator from "./bottomTabNavigation";


const Stack = createStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Tela Inicial"
        screenOptions={() => ({
            headerShown: false,
        })}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Cadastro" component={RegisterScreen}/>
            <Stack.Screen name="Tela Inicial" component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;