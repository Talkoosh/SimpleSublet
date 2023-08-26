import { StyleSheet, Text, View, Dimensions, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}></View>
            <View>
                <Text>Email</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => <TextInput style={styles.input} placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} />}
                    name="email"
                />
                <Text>Password</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => <TextInput style={styles.input} placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} />}
                    name="password"
                />
            </View>
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
    },
    input: {
        width: 200,
        height: 50,
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 20,
    },
    loginButton: {
        backgroundColor: 'blue',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    loginText: {
        color: 'white',
    },
});
