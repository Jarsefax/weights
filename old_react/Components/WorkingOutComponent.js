import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default WorkingOutComponent = ({ hide }) =>
    <View>
        <Text>Working out</Text>
        <Icon.Button name='down' onPress={hide}>down</Icon.Button>
    </View>