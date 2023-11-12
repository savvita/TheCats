import { View, StyleSheet, Text, Image } from 'react-native';


const Temperament = ({ items, containerStyle, titleStyle, textStyle, icon, iconStyle }) => {
    if(!items) return null;
    return (
        <View style={ [styles.container, containerStyle ?? {}] }>
            <Text style={ [styles.title, titleStyle ?? {}] }>Temperament :</Text>
            { items.map((item, index) => 
                <View key={ index } style={ styles.item }>
                    <Image
                            source={ icon ?? require('../assets/images/cat_paw_filled.png') }
                            style={ [styles.image, iconStyle ?? {}] }
                        />
                    <Text style={ [styles.text, textStyle ?? {}] }>{ item }</Text>
                </View>
            ) }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    text: {
        fontSize: 16,
        paddingStart: 10,
        fontFamily: 'Montserrat-Regular'
    },
    image: {
        width: 20,
        height: 20
    },
    item: {
        flexDirection: 'row',
        paddingStart: 40,
        marginVertical: 3
    }
});

export default Temperament;