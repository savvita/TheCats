import { View, StyleSheet , Text } from 'react-native';
import { useState, useEffect } from 'react';
import Rate from '../components/Rate';

const Characteristics = ({ item, titleStyle }) => {
    
    const [characteristics, setCharacteristics] = useState([]);

    const getCharacteristicName = (characteristic) => {
        let name = characteristic[0].toUpperCase();

        for(i = 1; i < characteristic.length; i++) {
            if(characteristic[i].toUpperCase() === characteristic[i]) {
                name += ' ';
                name += characteristic[i].toLowerCase();
            } else {
                name += characteristic[i];
            }
        }

        return name;
    }

    const setItemCharacteristics = () => {
        const _characteristics = [];

        for(ch in item.characteristics) {
            _characteristics.push(            
                <Rate
                    key={ ch }
                    title={ getCharacteristicName(ch) }
                    emptyImage={ require('../assets/images/cat_paw_empty.png') }
                    filledImage={ require('../assets/images/cat_paw_filled.png') }
                    maxRate={ 5 }
                    rate={ item.characteristics[ch] }
                    width={ 25 }
                    height={ 25 }
                    titleStyle={ styles.text }
                    containerStyle={ styles.container }
                />);
        }

        setCharacteristics(_characteristics);
    }

    useEffect(() => {
        setItemCharacteristics();
    }, []);

    return (
        <View>
            <Text style={ [styles.title, titleStyle ?? {}] }>Characteristics :</Text>
            { characteristics }
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat-Regular'
    },
    container: {
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        marginTop: 10
    },
});

export default Characteristics;