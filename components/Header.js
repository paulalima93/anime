import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={styles.upperContainer}>
            <Image source={require("../assets/loginho.png")} style={styles.appLogo} />
            <Text style={styles.appName}> ANIME </Text>
            <TouchableOpacity>
                <Ionicons name={"person-circle"} size={35} color="#1D5871" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    upperContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#0005", //preto com opacidade
        flex: 0.1,
        width: "90%",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginRight: 20,
        marginLeft: 20
    },
    appLogo: {
        width: 40,
        height: 40,
        marginTop: 20,
    },
    appName: {
        color: "#1D5871",
        fontFamily: "Comic",
        fontWeight: "bold",
        fontSize: 30
    },
});

export default Header;
