import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens/Main';
import ScrapCollector from './src/common/ScrapCollector/ScrapCollector';
import ScrapDetailsForm from './src/common/ScrapCollector/ScrapDetailsForm';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScrapCollector"
          component={ScrapCollector}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScrapDetailsForm"
          component={ScrapDetailsForm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
