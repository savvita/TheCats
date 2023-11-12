import { View, StyleSheet, Text, Image } from 'react-native';
import Accordion from '../components/Accordion';
import FitableImage from './FitableImage';
import CustomizedButton from './CustomizedButton';

const BreedItem = ({ item, onNavigatePress }) => {
    const imageSource = item.image ? {
        uri: item.image.url
    } :
    require('../assets/images/no_image.png');

    return (
        <Accordion
                title={ item.name }
                headerContainerStyle={ styles.accordion_header }
                headerTitleStyle={ styles.accordion_header_title }>
                    <View>
                        <FitableImage
                                source={ imageSource }
                                style={ styles.image }
                            />
                        <Text style={ styles.text }>{ item.description }</Text>
                        <CustomizedButton
                                title="View"
                                buttonStyle={ styles.button }
                                textStyle={ styles.button_text }
                                onPress={ onNavigatePress }
                            />
                    </View>
        </Accordion>
    );
}


const styles = StyleSheet.create({
    accordion_header: {
        paddingHorizontal: 10,
        borderTopWidth: 0
    },
    accordion_header_title: {
        fontFamily: 'Montserrat-Bold',
        color: '#333',
        fontSize: 16
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        color: '#333',
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'justify',
        marginTop: 5
    },
    image: {
        width: '90%'
    },
    button: {
        backgroundColor: '#333',
        margin: 10
    },
    button_text: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular'
    }
});

export default BreedItem;