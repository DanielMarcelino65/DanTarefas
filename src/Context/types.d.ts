import { ReactElement } from 'react';

export interface Task{
  id: string;
  title: string;
}

export interface TasksContextData {
  tasks: Task[];
  addTask: (task: string) => void;
  removeTask: (id: string) => void;
}

export interface TasksProviderProps {
  children: ReactElement;
}
