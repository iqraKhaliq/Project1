import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const myStack= createStackNavigator();

function App() {
  return (
   <Navigator>
     <myStack.Navigator initialRouteName="Start">
       <myStack.Screen name="Start" component={Start} options={{header: false}}/>
       <myStack.Screen name="SignIn" component={SignIn} options={{header: false}}/>
       <myStack.Screen name="SignUp" component={SignUp} options={{header: false}}/>
       <myStack.Screen name="Home" component={Home} options={{header: false}}/>
     </myStack.Navigator>
   </Navigator>
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