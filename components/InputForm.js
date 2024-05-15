import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputForm = (props) => {
    const { senha } = props;

    return (
        <View style={styles.form}>
            <Ionicons name={props.iconName} size={25} color="#1D5871" />
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.valor}
                placeholder={props.dica}
                placeholderTextColor={"#1D5871"}
            />
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
    }
});

export default InputForm;
