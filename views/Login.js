import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {};
    return (
        <View style={styles.container}>
            <View style={styles.logo}></View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => <TextInput placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} />}
                name="email"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => <TextInput placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} />}
                name="password"
            />
            <Button title="submit" onPress={handleSubmit(onSubmit)}>
                Login
            </Button>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
    },
});
