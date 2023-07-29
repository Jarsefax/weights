import * as React from 'react';
import { View, Text } from 'react-native';
import StartWorkoutComponent from '../Components/StartWorkoutComponent';

export default HomePage = ({ navigation }) => 
    <View>
        <StartWorkoutComponent />        
        <Text 
            onPress={() => alert('this is the "home" page')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Homes Page</Text>
    </View>