import * as React from 'react';
import { Text, View } from 'react-native';

export default ExerciseList = ({ exercises }) =>
    <View>
        { exercises.map((e, i) => (
            <Text>e.name</Text>
        )) }
    </View>