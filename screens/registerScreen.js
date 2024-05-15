import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputForm from '../components/InputForm';
import InputPassword from "../components/InputPasswordForm";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const goToLoginScreen = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={estilos.container}>
            <Image style={estilos.loginho} source={require('../assets/loginho.png')} />
            <View style={estilos.input}>
                <InputForm
                    iconName={"person-circle-outline"}
                    dica="Digite seu nome"
                    valor={name}
                    onChangeText={setName}
                />

                <InputForm
                    iconName={"mail"}
                    dica="Digite seu e-mail"
                    valor={email}
                    onChangeText={setEmail}
                />

                <InputPassword
                    iconName={"lock-closed"}
                    dica="Digite sua senha"
                    valor={password}
                    onChangeText={setPassword}
                    senha={true}
                />

                <InputPassword
                    iconName={"lock-closed"}
                    dica="Confirme sua senha"
                    valor={confirmPassword}
                    onChangeText={setConfirmPassword}
                    senha={true}
                />

                <TouchableOpacity style={estilos.formButton}>
                    <Text style={estilos.formButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={estilos.login} onPress={goToLoginScreen}>
                    <Text style={estilos.loginText}>Já tem uma conta?</Text>
                    <Text style={estilos.loginTextBold}>Faça login!</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#90DDF3",
    },
    loginho: {
        marginTop: 100,
        width: 150,
        height: 150
    },
    input: {
        marginTop: 50,
        width: "80%",
        alignItems: 'center'
    },
    formButton: {
        height: 60,
        width: "100%",
        backgroundColor: "#1D5871",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center"
    },
    formButtonText: {
        color: "#FFF",
        fontSize: 20
    },
    login: {
        marginTop: 100,
        flexDirection: "row"
    },
    loginText: {
        fontSize: 16,
        color: "#1D5871",
    },
    loginTextBold: {
        marginLeft: 5,
        fontSize: 16,
        color: "#1D5871",
        fontWeight: 'bold'
    }
});

export default RegisterScreen;
