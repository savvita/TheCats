import { View, StyleSheet, Image, Text } from 'react-native';

const Rate = ({ title, rate, maxRate, emptyImage, filledImage, width, height, titleStyle, containerStyle }) => {
    const images = [];
    for(i = 0; i < rate; i++) {
        images.push(
            <Image
                key={ i }
                source={ filledImage }
                style={[styles.image, { width: width, height: height }]}
            />);
    }

    for(i = rate; i < maxRate; i++) {
        images.push(
            <Image
                key={ i }
                source={ emptyImage }
                style={[styles.image, { width: width, height: height }]}
            />);
    }

    return (
        <View style={ [styles.container, containerStyle ? containerStyle : {}] }>
            { title && <Text style={ [styles.title, titleStyle ? titleStyle : {}] }>{ title }</Text> }
            <View style={{ flexDirection: 'row' }}>{ images }</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        margin: 3,
        resizeMode: 'contain'
    },
    title: {
        alignSelf: 'center',
        marginEnd: 4,
        fontSize: 16
    }
});

export default Rate;