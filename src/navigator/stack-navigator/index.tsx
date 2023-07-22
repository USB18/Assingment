import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackOverflowScreen from '../../screen/stackOverflow'
import TabNavigator from '../bottom-navigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
               <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="StackOverflowScreen" component={StackOverflowScreen} />
         
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
