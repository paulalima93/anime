import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputPassword = (props) => {
    const [senhaVisivel, setSenhaVisivel] = useState(true);
    const [iconName, setIconName] = useState('eye-outline');

    const alternarVisibilidadeSenha = () => {
        setSenhaVisivel(!senhaVisivel);
        setIconName(iconName === "eye-outline" ? "eye-off-outline" : "eye-outline");
    };

    return (
        <View style={styles.form}>
            <Ionicons name={props.iconName} size={25} color="#1D5871" />
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.valor}
                placeholder={props.dica}
                placeholderTextColor={"#1D5871"}
                secureTextEntry={senhaVisivel}
            />

            <TouchableOpacity onPress={alternarVisibilidadeSenha}>
                <Ionicons name={iconName} size={25} color="#1D5871" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: "#FFF",
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderRadius: 30,
        paddingLeft: 20,
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        marginLeft: 15,
        fontSize: 20,
        width: "70%"
    }
});

export default InputPassword;
