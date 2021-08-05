import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Start from './src/Start';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Home from './src/Home';

const myStack= createStackNavigator();

function App() {
  return (
   <NavigationContainer>
     <myStack.Navigator initialRouteName="Start">
       <myStack.Screen name="Start" component={Start} />
       <myStack.Screen name="SignIn" component={SignIn} />
       <myStack.Screen name="SignUp" component={SignUp} />
       <myStack.Screen name="Home" component={Home} />
     </myStack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
});

export default App;