import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import FitableImage from '../components/FitableImage';
import Characteristics from '../components/Characteristics';
import Temperament from '../components/Temperament';
import Origin from '../components/Origin';
import InfoLinks from '../components/InfoLinks';
import Accordion from '../components/Accordion';

const BreedScreen = ({ route, navigation}) => {
    const [item, setItem] = useState(null);
    const [imageSource, setImageSource] = useState(null);

    useEffect(() => {
        if(route.params.item) {
            setItem(route.params.item);
            navigation.setOptions({ ...navigation.options, title: route.params.item.name });
            setImageSource(route.params.item.image ? {
                uri: route.params.item.image.url
            } :
            require('../assets/images/no_image.png'));
        }
    }, []);


    if(!item) return null;
    return (
        <ScrollView>
            <FitableImage
                    source={ imageSource }
                />
            <View style={ styles.container }>
                { 
                    item.altNames && 
                        <Text style={ styles.text }>Also known as : { item.altNames }</Text> 
                }
                <Origin 
                        code={ item.countryCode }
                        country={ item.origin }
                        size={ 20 }
                        containerStyle={ styles.origin }
                    />
                <Text style={ [styles.text, { textAlign: 'justify'}] }>{ item.description }</Text>

                <View style={ styles.row }>
                    <Text style={ [styles.text, styles.textBold] }>Weight: </Text>
                    <Text style={ styles.text }>
                        { item.weight.metric.min }-{ item.weight.metric.max } kg
                    </Text>
                </View>

                <View style={ styles.row }>
                    <Text style={ [styles.text, styles.textBold] }>Life span: </Text>
                    <Text style={ styles.text }>
                        { item.lifeSpan.min }-{ item.lifeSpan.max } years
                    </Text>
                </View>

                <Temperament
                        items={ item.temperament }
                        titleStyle={ [styles.text, styles.textBold] }
                    />
                <Characteristics 
                        item={ item }
                        titleStyle={ [styles.text, styles.textBold] }
                    />

                <Accordion
                        title='Additional links'
                        headerContainerStyle={ styles.accordion_header }
                        headerTitleStyle={ styles.accordion_header_title }>
                    <View>
                        <InfoLinks
                            items={ item.infoUrls }
                        />
                    </View>
                </Accordion>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    origin: {
        marginBottom: 10
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginBottom: 10
    },
    textBold: {
        fontFamily: 'Montserrat-Bold'
    },
    row: {
        flexDirection: 'row'
    },
    accordion_header: {
        paddingHorizontal: 10,
        borderBottomWidth: 0
    },
    accordion_header_title: {
        fontFamily: 'Montserrat-Bold',
        color: '#333',
        fontSize: 16
    },
});

export default BreedScreen;