import { createContext, useState } from 'react';
import { Task, TasksContextData, TasksProviderProps } from './types';

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider ({children}: TasksProviderProps ) {

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: string) {
    task && setTasks([...tasks, {id: String(new Date().getTime()), title: task}]);
  }

  function removeTask(id: string) {
    setTasks(tasks.filter((tasks: { id: string }) => tasks.id !== id));
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
