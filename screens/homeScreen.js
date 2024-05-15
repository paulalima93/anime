import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList
} from 'react-native'
import axios from "axios";
import * as Font from "expo-font";
import Header from "../components/Header";
import AnimeRecommendations from "../components/AnimeRecommendation";
import AnimeTop from "../components/AnimeTop";

let comicfont = {
    "comic": require("../assets/font/Comicbon.ttf")
};

const HomeScreen = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [animeRecommendations, setAnimeRecommendations] = useState([]);
    const [animeTop, setAnimeTop] = useState([]);

    useEffect(() => {
        loadFonts();
        getAnimeRecommendations();
        getAnimeTop();
    }, []);

    const getAnimeRecommendations = () => {
        axios.get("https://api.jikan.moe/v4/anime/1/recommendations")
            .then((response) => {
                const data = response.data.data
                setAnimeRecommendations(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const getAnimeTop = () => {
        axios.get("https://api.jikan.moe/v4/top/anime")
            .then((response) => {
                const data = response.data.data
                setAnimeTop(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const loadFonts = async () => {
        await Font.loadAsync(comicfont);
        setFontLoaded(true);
    }

    const renderItemRecommendation = ({ item: anime }) => {
        return <AnimeRecommendations anime={anime} navigation={navigation} />
    }

    const renderItemTop = ({ item: anime }) => {
        return <AnimeTop anime={anime} navigation={navigation} />
    }

    if (!fontLoaded) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    } else {
        let animes_recommendations = animeRecommendations.slice(0, 10);
        let animes_top = animeTop.slice(0, 10);
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safearea} />
                <ScrollView>
                    <Header />
                    <View style={styles.lowerContainer}>
                        <Text style={styles.text1}> Top Animes</Text>
                        <View style={styles.card}>
                            <FlatList
                                data={animes_top}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderItemTop}
                                horizontal={true}
                            />
                        </View>
                        <Text style={styles.text1}> Recomendações</Text>
                        <View style={styles.card}>
                            <FlatList
                                data={animes_recommendations}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderItemRecommendation}
                                horizontal={true}
                            />
                        </View>
                        <Text style={styles.text1}> Novidades</Text>
                        <View style={styles.card}>
                            <Text > Construindo... </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#90DDF3"
    },
    lowerContainer: {
        flex: 0.9,
        width: "100%",
        marginTop: 20
    },
    safearea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    card: {
        width: "98%",
        marginBottom: 10,
        alignSelf: "center",
        padding: 10
    },
    text1: {
        fontFamily: "Comic",
        fontSize: 20,
        marginLeft: 20,
        color: "#1D5871"
    }
})

export default HomeScreen;
