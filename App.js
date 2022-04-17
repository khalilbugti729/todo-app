import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import AddTask from './src/Screens/AddTask';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            contentStyle: {backgroundColor: '#fff'},
          }}
          name="To-Do App"
          component={Home}
        />
        <Stack.Screen
          options={{
            contentStyle: {backgroundColor: '#fff'},
          }}
          name="Add task"
          component={AddTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
