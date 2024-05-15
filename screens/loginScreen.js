import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import InputForm from '../components/InputForm'
import InputPassword from "../components/InputPasswordForm";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goToRegisterScreen = () => {
        navigation.navigate("Cadastro");
    }

    const userLogin = () => {
        navigation.navigate("Tela Inicial");
    }

    return (
        <View style={estilos.container}>
            <Image style={estilos.loginho} source={require('../assets/loginho.png')} />
            <View style={estilos.input}>
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
                />

                <TouchableOpacity style={estilos.formButton} onPress={userLogin}>
                    <Text style={estilos.formButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={estilos.register} onPress={goToRegisterScreen}>
                    <Text style={estilos.registerText}>Não tem uma conta?</Text>
                    <Text style={estilos.registerTextBold}>Crie a sua!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
    register: {
        marginTop: 100,
        flexDirection: "row"
    },
    registerText: {
        fontSize: 16,
        color: "#1D5871",
    },
    registerTextBold: {
        marginLeft: 5,
        fontSize: 16,
        color: "#1D5871",
        fontWeight: 'bold'
    }

})

export default LoginScreen;
