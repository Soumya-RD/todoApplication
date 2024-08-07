// Login    Page


import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Scr001 = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNameFromServer, setUserNameFromServer] = useState('');
    // const [emailFromServer, setEmailFromServer] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.244.200:3011/master/todoApp', {
                username,
                // email,
                password
            });
            if (response.data && response.data.username) {
                setUserNameFromServer(response.data.username);

                Alert.alert("Success", `Hello ${username}`);
                navigation.navigate('Scr003');
            }
            // else if (response.data && response.data.email) {
            //     setEmailFromServer(response.data.email);
            //     Alert.alert("Success", `Hello ${email}`);
            //     navigation.navigate('Scr003');
            // }
            else {
                Alert.alert("Error", " username or email not found.");
            }
        }
        catch (error) {
            if (error.response) {
                Alert.alert("Error", `Server responded with status code ${error.response.status}:${error.response.data.message}`);
            } else if (error.request) {
                Alert.alert("Error", "No response received from the server.");
            } else {
                Alert.alert("Error", `Error in making request:${error.message}`);
            }
            console.error(error);
        }

    };

    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.LoginAccountText}>Login Account</Text>

            </View>
            <View style={styles.inputContainer}>

                <View style={styles.usernameContainer}>
                    {/* username */}
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                    <TextInput placeholder='username or email' style={styles.textInput}
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    {/* password */}
                    <MaterialIcons name="password" size={24} color="black" />

                    <TextInput placeholder='password' style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <Ionicons name="eye" size={24} color="black" />
                </View>
            </View>
            <View style={styles.LOginContainer}>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.SubmitText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LOginContaineriner}>
                <View>
                    <Text style={styles.CreateNew}>Create a new account? </Text>
                </View>
                <View style={styles.loginButtom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Scr001')}>
                        <Text style={styles.SignUpText}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Scr001

const styles = StyleSheet.create({


    Container: {
        flex: 1,
        backgroundColor: '#efe6dd'
    },
    LoginAccountText: {
        fontWeight: 'bold',
        marginLeft: 90,
        fontSize: 25,
        marginTop: 55
    },
    inputContainer: {
        marginTop: 15,
        marginLeft: 30,

    },

    usernameContainer: {
        borderWidth: 1,
        width: 280,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#f4f3ee'
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
        width: 220
    },
    LOginContainer: {
        borderWidth: 1,
        width: 100,
        marginLeft: 120,
        height: 25,
        marginTop: 25,
        borderRadius: 5,
        backgroundColor: '#003049'
    },
    SubmitText: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 2,
        color: '#fff'

    },
    LOginContaineriner: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 70
    },
    CreateNew: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 2,

    },
    SignUpText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 2,
        color: '#fff'
    },
    loginButtom: {
        borderWidth: 1,
        width: 80,
        borderRadius: 5,
        height: 25,
        backgroundColor: '#003049'
    }
})