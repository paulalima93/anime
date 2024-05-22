import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import * as Font from "expo-font";
import Ionicons from 'react-native-vector-icons/Ionicons';

const comicfont = {
    "comic": require("../assets/font/Comicbon.ttf")
};


const AnimeSeason = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync(comicfont);
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

        let size = 30;
        let color = "tomato";
    return (
        
        <TouchableOpacity style={styles.button}>
            <Image source={{ uri: props.anime.images.jpg.image_url }} style={styles.image} />
            <TouchableOpacity style={styles.icon}>
                <Ionicons name='heart' size={size} color={color} />
            </TouchableOpacity>
            {fontLoaded && <Text style={styles.title}>{props.anime.title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#E5F7FB",
        borderRadius: 5,
        width: 150,
        padding: 7,
        margin: 2
    },
    title: {
      //  fontFamily: "Comic",
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
    },
    icon: {
        position: "absolute",
        backgroundColor:  "#E5F7FB",
        padding: 3,
        right: 5,
        top: 5,
        borderRadius: 5,
    }
});

export default AnimeSeason;
