
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/components/Pages/Home';
import { TasksContext, TasksProvider } from './src/Context';


function App(): JSX.Element {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
