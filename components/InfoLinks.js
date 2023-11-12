import { View, StyleSheet, Linking, Button } from 'react-native';
import { useEffect, useState } from 'react';
import CustomizedButton from './CustomizedButton';

const InfoLinks = ({ items }) => {
    const [buttons, setButtons] = useState([]);

    const openUrl = (url) => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    console.log("Don't know how to open URI: " + url);
                }
            });
    }

    const getButtonTitle = (name) => {
        let title = name[0].toUpperCase();
        title += name.slice(1, -3);

        return title;
    }

    useEffect(() => {
        const _buttons = [];
        for(let item in items) {
            _buttons.push(
                <CustomizedButton
                        key={ item }
                        title={ getButtonTitle(item) }
                        buttonStyle={ styles.button }
                        textStyle={ styles.button_text }
                        onPress={ () => openUrl(items[item]) }
                    />
            );
        }
        setButtons(_buttons);
    }, []);

    if(!items) return null;

    return (
        <View>
            { buttons }
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333',
        marginVertical: 2
    },
    button_text: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular'
    }
});

export default InfoLinks;