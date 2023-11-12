import { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";



const FitableImage = ({ source, style }) => {
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        if(source.uri) {
            Image.getSize(source.uri, (w, h) => {
                setRealSize(w, h);
            }, (err) => {
                console.log(err);
            });
        }
        else  {
            const { width, height } = Image.resolveAssetSource(source);
            setRealSize(width, height);
        }
    }, []);


    const setRealSize = (width, height) => {
        let percentage = 1;
        if (style && style.width) {
            let temp = parseInt(style.width.slice(0, -1));
            if(temp != NaN) {
                percentage = temp / 100;
            }
        }
        const k = Dimensions.get('window').width / width * percentage;
    
        setSize({
            width: width * k,
            height: height * k
        });
    }

    return (
        <Image 
                source={ source }
                style={ [style, { width: size.width, height: size.height }] } 
            />
    );
}

export default FitableImage;