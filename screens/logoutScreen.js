import React from "react";
import { Text, View, StyleSheet } from 'react-native'

const LogoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Logout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default LogoutScreen;
