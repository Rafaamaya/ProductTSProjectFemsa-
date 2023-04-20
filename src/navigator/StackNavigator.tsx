
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  DetailsScreen } from '../screens/DetailScreen/DetailsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { Product } from '../interfaces/productInterface';
export type RootStackParams = {
    HomeScreen: undefined,
    DetailsScreen: { item: Product },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
               headerShown:false,
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                options={{ title: '' }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="DetailsScreen"
                options={{ title: 'Clima' }}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
};
