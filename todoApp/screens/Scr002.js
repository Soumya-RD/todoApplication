// Login    Page


// registation 

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Scr001 = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.LoginAccountText}>Login Account</Text>

            </View>
            <View style={styles.inputContainer}>

                <View style={styles.usernameContainer}>
                    {/* username */}
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                    <TextInput placeholder='username or email' style={styles.textInput} />
                </View>
                <View style={styles.passwordContainer}>
                    {/* password */}
                    <MaterialIcons name="password" size={24} color="black" />

                    <TextInput placeholder='password' style={styles.textInput} />
                    <Ionicons name="eye" size={24} color="black" />
                </View>
            </View>
            <View style={styles.LOginContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Scr003')}>
                    <Text style={styles.SubmitText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LOginContaineriner}>
                <View>
                    <Text style={styles.CreateNew}>Create a new account? </Text>
                </View>
                <View style={styles.loginButtom}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Scr001')}>
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
        marginTop:55
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