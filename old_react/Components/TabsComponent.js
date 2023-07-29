import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from '../Pages/HomePage';
import ExercisesPage from '../Pages/ExercisesPage';
import WorkoutsPage from '../Pages/WorkoutsPage';

const homeName = 'Home';
const exercisesName = 'Exercises';
const workoutsName = 'Workouts';

const Tab = createBottomTabNavigator();

export default Tabs = () => 
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName={homeName} 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === exercisesName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === workoutsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 }
            })}
        >
            <Tab.Screen name={homeName} component={HomePage} />
            <Tab.Screen name={workoutsName} component={WorkoutsPage} />
            <Tab.Screen name={exercisesName} component={ExercisesPage} />
        </Tab.Navigator>
    </NavigationContainer>