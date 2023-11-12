
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import { useState, useEffect } from 'react';
import BreedItem from '../components/BreedItem';
import data from '../data/files';


const BreedsScreen = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const loadBreeds = async() => {
        const result = await data.Breeds.getAsync();
        setItems(result);
        setFilteredItems(result);
    }

    useEffect(() => {
        loadBreeds();
    }, []);

    const filter = (txt) => {
        txt = txt.toLowerCase();
        if (txt.length > 0) {
            setFilteredItems(items.filter(x => 
                (x.name.toLowerCase().includes(txt))));
        } else {
            setFilteredItems(items);
        }
    }

    
    const navigateToBreed = (item) => {
        navigation.navigate("breed", { item: item });
    }


    return (
        <View style={ styles.container }>
            <TextInput 
                    onChangeText={ filter } 
                    placeholder='Search...' 
                    style={ styles.searchInput } 
                />
            { filteredItems.length > 0 ? 
                <FlatList
                data={ filteredItems }
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => 
                    <BreedItem item={ item } onNavigatePress={ () => navigateToBreed(item) } /> }
                    />
            :
                <View style={ styles.center }>
                    <Text>Not found</Text>
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    searchInput: {
        paddingBottom: 4,
        paddingStart: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BreedsScreen;