import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Start extends Component 
{
    render(){
  return (
    <View style={styles.container}>
      <Button 
        style={styles.button} 
        title="Sign In" 
        onPress={()=>this.props.navigation.navigate('SignIn')}/>
      <Button 
        title="Sign Up" 
        style={styles.button}
        onPress={()=>this.props.navigation.navigate('SignUp')}/>
    </View>
  );
    }
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
  button:
  {
      paddingTop: 5,
      marginTop:5,
      color: 'red',
  }
});
