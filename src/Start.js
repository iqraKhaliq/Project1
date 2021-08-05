import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Start() {
  return (
    <View style={styles.container}>
      <Button onPress={()=> this.props.navigation.navigate('SignIn')}>Sign In</Button>
      <Button onPress={()=> this.props.navigation.navigate('SignUp')}>Sign Up</Button>
    </View>
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
