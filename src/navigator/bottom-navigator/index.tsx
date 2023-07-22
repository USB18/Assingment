import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NodeScreen from '../../screen/node';
import ReactNativeScreen from '../../screen/react-native';
import ReactScreen from '../../screen/react';
import TabIcon from './tab-icon';

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { height: 80 },
};

const tabScreens = [
    {
        name: 'ReactScreen',
        component: ReactScreen,
        label: 'React',
    },
    {
        name: 'ReactNativeScreen',
        component: ReactNativeScreen,
        label: 'React Native',
    },
    {
        name: 'NodeScreen',
        component: NodeScreen,
        label: 'Node',
    },
];

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="ReactScreen"
            screenOptions={tabScreenOptions}>
            {tabScreens.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                isFocused={focused}
                                label={tab.label}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default TabNavigator;