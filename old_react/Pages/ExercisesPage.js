import * as React from 'react';
import { View, Text } from 'react-native';
import { getDBConnection } from '../Database/db-operations';
import ExerciseListComponent from '../Components/ExerciseListComponent';
import StartWorkoutComponent from '../Components/StartWorkoutComponent';

export default ExercisesPage = ({ navigation }) => {
    const [exercises, setExercises] = useState([]);

    const loadDataCallback = useCallback(async () => {
        try {
            const db = await getDBConnection();
            await createExerciseTable(db);
            const storedTodoItems = await getTodoItems(db);
            if (storedTodoItems.length) {
                setTodos(storedTodoItems);
            } else {
                await saveTodoItems(db, initTodos);
                setTodos(initTodos);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadDataCallback();
      }, [loadDataCallback]);

    return (
        <View>
            <StartWorkoutComponent />
            // add new
            // search and/or filter
            // list/table (name, type(bb,db,etc), muscle)
            <Text 
                onPress={() => alert('this is the "exercises" page')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Exercises Page</Text>
            <ExerciseListComponent exercises={exercises} />
        </View>
    );
}