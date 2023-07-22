import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

interface TabIconProps {
    isFocused: boolean;
    label: string;
}

const TabIcon: React.FC<TabIconProps> = ({
    isFocused,
    label,
}) => {
    return (
        <View style={style.container}>
            <Text style={[
                style.iconTextStyle,
                {
                    color: isFocused ? "#ED1B2F" : "#444444",
                    marginTop: isFocused ? 1 : 9,
                },
            ]}>
                {label}
            </Text>
        </View>
    );
};

export default TabIcon;