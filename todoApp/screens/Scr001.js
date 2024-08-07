import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';

const Scr001 = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoder] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://192.168.244.200:3011/master', {
                username,
                email,
                password
            });
            navigation.navigate('Scr003'); // Navigate after successful registration
        } catch (error) {
            Alert.alert("Error", "Username or email already exists");
        }
    }

    const display = () => {
        setLoder(true);
        setTimeout(() => {
            setLoder(false);
        }, 5000);
    }





    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor='#fff' />
            <View>
                <Text style={styles.RegistationText}>Register</Text>
                <Text style={styles.registationText}>Welcome! Fill the details to create a new account.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.usernameContainer}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                    <TextInput
                        placeholder='Username'
                        style={styles.textInput}
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.emailContainer}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <MaterialIcons name="password" size={24} color="black" />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true} // Hide password input
                    />
                    <Ionicons name="eye" size={24} color="black" />
                </View>
            </View>
            {
                loader ? <ActivityIndicator style={styles.loader} />
                    : null
            }
            <View style={styles.SubmitContainer}>
                <Pressable onPress={handleRegister} onPressIn={display} >
                    <Text style={styles.SubmitText}>Submit</Text>
                </Pressable>
            </View>

            <View style={styles.LoginContainer}>
                <View>
                    <Text style={styles.LoginText}>Login into existing account? </Text>
                </View>
                <View style={styles.loginButton}>
                    <Pressable onPress={() => navigation.navigate('Scr002')} onPressIn={display}>
                        <Text style={styles.LoginText1}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default Scr001;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#efe6dd'
    },
    RegistationText: {
        fontWeight: 'bold',
        marginLeft: 120,
        fontSize: 25,
        marginTop: 55
    },
    registationText: {
        fontWeight: 'bold',
        marginLeft: 30,
        color: '#283618',
    },
    inputContainer: {
        marginTop: 25,
        marginLeft: 30,
    },
    usernameContainer: {
        borderWidth: 1,
        width: 280,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#f4f3ee'
    },
    emailContainer: {
        borderWidth: 1,
        width: 280,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#f4f3ee',
        marginTop: 5
    },
    passwordContainer: {
        borderWidth: 1,
        width: 280,
        marginTop: 5,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#f4f3ee'
    },
    textInput: {
        fontWeight: 'bold',
        textAlign: 'center',
        width: 220,
    },
    SubmitContainer: {
        borderWidth: 1,
        width: 100,
        marginLeft: 120,
        height: 25,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#003049'
    },
    SubmitText: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 2,
        color: '#fff'
    },
    LoginContainer: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 50
    },
    LoginText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 2,
    },
    LoginText1: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 2,
        color: '#fff'
    },
    loginButton: {
        borderWidth: 1,
        width: 80,
        borderRadius: 5,
        height: 25,
        backgroundColor: '#003049'
    },

});
