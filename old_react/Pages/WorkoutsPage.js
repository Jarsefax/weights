import * as React from 'react';
import { View, Text } from 'react-native';
import StartWorkoutComponent from '../Components/StartWorkoutComponent';

export default WorkoutsPage = ({ navigation }) => 
    <View>
        // add new
        // list/table
        <StartWorkoutComponent />
        <Text 
            onPress={() => alert('this is the "workouts" page')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Workouts Page</Text>
    </View>