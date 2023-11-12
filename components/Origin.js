import { View, StyleSheet, Text } from 'react-native';
import CountryFlag from "react-native-country-flag";

const Origin = ({ code, country, size, containerStyle, textStyle }) => {
    if(!code) return null;
    return (
        <View style={ [styles.container, containerStyle ?? {}] }>
            <Text style={ [styles.text, { fontFamily: 'Montserrat-Bold' },  textStyle ?? {}] }>Origin: </Text>
            { 
                country && <Text style={ [styles.text, textStyle ?? {}] }>{ country }</Text>
            }
            <CountryFlag 
                    style={ styles.icon }
                    isoCode={ code } 
                    size={ size ?? 25} 
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    },
    icon: {
        marginStart: 10
    }
});

export default Origin;