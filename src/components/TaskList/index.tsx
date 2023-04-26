import { useContext, useEffect } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { Touchable } from '../TouchableOpacity';
import { Task } from '../../Context/types';
import { TasksContext } from '../../Context';
export const TaskList = () => { 
    const tasks = useContext(TasksContext);

    function handleRemoveTask(id: string) {
      Alert.alert('Remover item', 'Tem certeza que você deseja remover este item?', [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => tasks.removeTask(id),
        }
      ])
    }

    return (
        <FlatList showsVerticalScrollIndicator={false}
          data={tasks.tasks as unknown as ArrayLike<Task>}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Touchable onPress={() => handleRemoveTask(item.id)}
            style={{backgroundColor: '#29292e', borderRadius: 50}}
            textStyle={{color: '#f1f1f1'}}>
            {item.title}
            </Touchable>
          )}
          />
    );
};
