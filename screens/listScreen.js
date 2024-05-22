import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = ({ route }) => {
    const { title, data } = route.params;
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title === "Recomendações" ? item.entry.title : item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
             <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    itemText: {
        fontSize: 18
    }
});

  

export default ListScreen;