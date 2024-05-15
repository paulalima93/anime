import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import * as Font from "expo-font";

const comicfont = {
    "comic": require("../assets/font/Comicbon.ttf")
};

const AnimeTop = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync(comicfont);
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    return (
        <TouchableOpacity style={styles.button}>
            <Image source={{ uri: props.anime.images.jpg.image_url }} style={styles.image} />
            {fontLoaded && <Text style={styles.title}> {props.anime.title} </Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFB",
        borderRadius: 5,
        width: 150,
        paddingTop: 10,
        margin: 2
    },
    title: {
        fontFamily: "Comic",
        fontSize: 15,
        color: "#1D5871"
    },
    image: {
        resizeMode: 'contain',
        width: 140,
        height: 190,
        alignSelf: 'center',
        marginBottom: 3,
        borderRadius: 10
    }
});

export default AnimeTop;
