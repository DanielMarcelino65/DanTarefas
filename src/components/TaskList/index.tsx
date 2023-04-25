import { useContext, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Touchable } from '../TouchableOpacity';
import { Task } from '../../Context/types';
import { TasksContext } from '../../Context';
export const TaskList = () => { 
    const tasks = useContext(TasksContext);

    return (
        <FlatList
          data={tasks.tasks as unknown as ArrayLike<Task>}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Touchable onPress={() => tasks.removeTask(item.id)}
            style={{backgroundColor: '#29292e', borderRadius: 50}}
            textStyle={{color: '#f1f1f1'}}>
            {item.title}
            </Touchable>
          )}
          />
    );
};
