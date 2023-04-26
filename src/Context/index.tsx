import { createContext, useContext, useEffect, useState } from 'react';
import { Task, TasksContextData, TasksProviderProps } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider ({children}: TasksProviderProps ) {

  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksData = '@MyTasks:tasks'

  useEffect(() => {
    async function loadTasks() {
      const storageTasks = await AsyncStorage.getItem(tasksData);
      storageTasks && setTasks(JSON.parse(storageTasks));
    }
    loadTasks();
  }, []);

   async function addTask (task: string) {
    try {
      const data = {id: String(new Date().getTime()), title: task};
      task && setTasks([...tasks, data]);
      AsyncStorage.setItem(tasksData, JSON.stringify([...tasks, data]));
    } catch {
      throw new Error('Não foi possível salvar a tarefa');
    }
  }

   async function removeTask(id: string) {
    const newTaskList = tasks.filter((tasks: { id: string }) => tasks.id !== id);
    setTasks(newTaskList);
    AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  }

  const value: TasksContextData = {
    tasks,
    addTask,
    removeTask,
  };


  return (
    <TasksContext.Provider value={ value }>
      {children}
    </TasksContext.Provider>
  );
}

export function useTaskList(): TasksContextData {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTaskList must be used within a TasksProvider');
  }
  return context;
}
