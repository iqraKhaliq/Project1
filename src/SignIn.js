import React, { Component, useState } from 'react';
import {View, Text,TextInput,Alert,StyleSheet} from 'react-native'; 
import { Button } from 'react-native-paper';
// import { ThemeConsumer } from 'react-native-elements';

export class SignIn extends Component
{
    state={
        email:"",
        password: "",
    };

    render()
    {
        return(
            <View style={styling.MainContainer}>
                <Text>Username/Email</Text>
                <TextInput
                    style={styling.TextStyle}
                    placeholder={"Enter Username or Email"}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    keyboardType="email-address"
                    ></TextInput>
                <Text>Password</Text>
                <TextInput
                    style={styling.TextStyle}
                    placeholder={"Enter Username or Email"}
                    value={this.state.password}
                    onChangeText={(password)=> this.setState({password})} 
                    ></TextInput>
            <Button 
                mode={'outlined'}
                onPress={()=> alert('Signing In')}> SignIn</Button>
            </View>
        )
    }

    loggingIn= async() => {
        try
        {
            if(this.state.email === "")
            {
                alert('Email Address Missing');
            }
            else if(this.state.password === "")
            {
                alert('Password Missing');
            }
            else if((this.state.email !== "") && (this.state.password !== ""))
            {
                alert('Signing In');
            }

            this.setState({
                email: "",
                password: "",
            });
            navigation.navigate('Home');
        }
        catch(e)
        {
            alert(e.toString());
        }
    }
}

const styling= StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        padding: 10,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    TextStyle:
    {
        width: 250,
        height: 50,
        fontSize: 25,
        color: 'red',
    },
    TextHeader:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'maroon',
    },
});

export default SignIn;