import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TasksContext } from '../../../Context';
import { ItemCard } from '../../item-card';
import { Input } from '../../Input';
import { Touchable } from '../../TouchableOpacity';
import { TaskList } from '../../TaskList';

export default function Home(): JSX.Element {
  const [newTask, setNewTask] = useState('');

  const { addTask } = React.useContext(TasksContext);

  return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#121214' }}>
    <View style={{paddingHorizontal: 30, paddingVertical: 50}}>
      <ItemCard>Tarefas</ItemCard>
      <Input placeholder="Nova tarefa ..." placeholertextcolor="#555" onChangeText={setNewTask} />
      <Touchable onPress={() => addTask(newTask)}>Adicionar</Touchable>
    </View>
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <ItemCard>Minha Lista</ItemCard>
      <TaskList />
    </View>
    
  </SafeAreaView>
  );
}
