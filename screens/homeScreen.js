import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native'
import axios from "axios";
import * as Font from "expo-font";
import Header from "../components/Header";
import AnimeRecommendations from "../components/AnimeRecommendation";
import AnimeTop from "../components/AnimeTop";
import AnimeSeason from "../components/AnimeSeason";

let comicfont = {
    "comic": require("../assets/font/Comicbon.ttf")
};

const HomeScreen = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [animeRecommendations, setAnimeRecommendations] = useState([]);
    const [animeTop, setAnimeTop] = useState([]);
    const [animeSeason, setAnimeSeason] = useState([]);
    
    useEffect(() => {
            loadFonts();
            getAnimeRecommendations();
            getAnimeTop();
            getAnimeSeason();
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

    const getAnimeSeason = () => {
        axios.get('https://api.jikan.moe/v4/seasons/now').then((response) => {
            const data = response.data.data
            setAnimeSeason(data)
            
        }).catch((error)=>{
            console.log(error.message)
        })
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

    const renderItemSeason = ({ item: anime }) => {
        return <AnimeSeason anime={anime} navigation={navigation} />
    }

    if (!fontLoaded) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        )
    } else {
        let animes_recommendations = animeRecommendations.slice(0, 10);
        let animes_top = animeTop.slice(0, 10);

        //ordena os resultados de acordo com o rank
        let animes_season = animeSeason.sort(function(a, b){
            return a.rank - b.rank
        })
        animes_season = animes_season.slice(0,10);
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safearea} />
                <ScrollView>
                    <Header />
                    <View style={styles.lowerContainer}>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.text1}>Top Animes</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Lista', { title: 'Top Animes', data: animeTop })}>
                                <Text style={styles.text2}> Ver mais</Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                        <View style={styles.card}>
                            <FlatList
                                data={animes_top}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderItemTop}
                                horizontal={true}
                            />
                        </View>
                        
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.text1}>Animes da Temporada</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Lista', { title: 'Animes da Temporada', data: animeSeason })}>
                                <Text style={styles.text2}> Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.card}>
                        <FlatList
                                data={animes_season}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderItemSeason}
                                horizontal={true}
                            />
                        </View>

                        <View style={styles.subTitleContainer}>
                            <Text style={styles.text1}>Recomendações</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Lista', { title: 'Recomendações', data: animeRecommendations })}>
                                <Text style={styles.text2}> Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.card}>
                            <FlatList
                                data={animes_recommendations}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderItemRecommendation}
                                horizontal={true}
                            />
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
        fontSize: 20,
        marginLeft: 20,
        color: "#1D5871"
    },
    text2: {
        fontSize: 16,
        marginLeft: 20,
        color: "#1D5871",
        marginTop: 4
    },
    subTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20
    }
})

export default HomeScreen;
