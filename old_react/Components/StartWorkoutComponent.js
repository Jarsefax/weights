import * as React from 'react';
import { Text, View } from 'react-native';
import { Overlay } from "@rneui/themed";
import { WorkingOutContext } from '../App';

export default StartWorkout = ({}) =>
    <WorkingOutContext.Consumer>
        { !workoutInProgress && 
            <Overlay>
                <Text>Start workout</Text>
            </Overlay> 
        }
    </WorkingOutContext.Consumer>