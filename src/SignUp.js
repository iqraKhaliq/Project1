import * as React, {Component, useState} from 'react';
import { View,Text, SafeAreaVie,Picker,Alert,StyleSheet } from 'react-native';
import { Button } from 'react-native-element';
import { TextInput } from 'react-native-paper';

export class SignUp extends Component
{
    state={
        fname:"",
        lname:"",
        gender:"",
        phone: null,
        email: "",
        pass: "",
        confirmPass: "",
    };

    render()
    {
        return(
            <SafeAreaView>
                <View>
                    <Text style={styling.TextStyle}>First Name</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter First Name"}
                        value={this.state.fname}
                        onChangeText={(fname) => this.setState({fname})}
                        keyboardType="default"></TextInput>
                    
                    <Text style={styling.TextStyle}>Last Name</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter Last Name"}
                        value={this.state.lname}
                        onChangeText={(lname) => this.setState({lname})}
                        keyboardType="default"></TextInput>
                    
                    <Text>Gender</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        onValueChange={(gender)=> this.setState({gender})}
                        style={styling.TextStyle}
                        >
                        <Picker.Item label="Select Gender"/>
                        <Picker.Item label="Female" value="female"/>
                        <Picker.Item label="Male" value="male"/>
                        <Picker.Item label="Other" value="other"/>
                    </Picker>
                    
                    <Text style={styling.TextStyle}>Phone</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter Phone Number"}
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({phone})}
                        keyboardType="number-pad"></TextInput>
                    
                    <Text style={styling.TextStyle}>Email Address</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter Username or Email"}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        keyboardType="email-address"></TextInput>
                    
                    <Text style={styling.TextStyle}>Password</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter Password"}
                        value={this.state.pass}
                        onChangeText={(pass) => this.setState({pass})}
                        keyboardType="default"></TextInput>
                    
                    <Text style={styling.TextStyle}>Confirm Password</Text>
                    <TextInput
                        style={styling.TextStyle}
                        placeholder={"Enter Username or Email"}
                        value={this.state.confirmPass}
                        onChangeText={(confirmPass) => this.setState({confirmPass})}
                        keyboardType="default"></TextInput>

                    <Button 
                        type="outline"
                        title="Sign Up"
                        onPress={this.newUser}
                        />

                </View>
            </SafeAreaView>
        )
    }

    newUser= async() =>
    {
        try
        {
            if(this.state.fname === "")
            {
                alert('First Name Missing');
            }
            else if(this.state.lname === "")
            {
                alert('Last Name Missing');
            }
            else if(this.state.gender === "")
            {
                alert('Gender Missing');
            }
            else if(this.state.phone === null)
            {
                alert('Phone Number Missing');
            }
            else if(this.state.email === "")
            {
                alert('Email Address Missing');
            }
            else if(this.state.pass === "")
            {
                alert('Password Missing');
            }
            else if(this.state.confirmPass === "")
            {
                alert('Confirm Password Missing');
            }
            else if(this.state.pass !== this.state.confirmPass)
            {
                alert('Confirm Password does not match');
            }
            else if((this.state.fname !== "") && (this.state.lname !== "") && (this.state.gender !== "")
                    && (this.state.phone !== null) && (this.state.email !== "") && 
                    (this.state.pass === this.state.confirmPass))
                    {
                        alert('Data addded');
                    }

            this.setState({
                fname: "",
                lname: "",
                gender: "",
                phone: null,
                email:"",
                pass: "",
                confirmPass:"",
            });    
        }
        catch(e)
        {
            alert(e.toString());
        }
    }
}

const styling=StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
    },
    TextStyle:
    {
        fontSize: 25,
        color: 'red',
        fontWeight: '500',
    },
});

export default SignUp;