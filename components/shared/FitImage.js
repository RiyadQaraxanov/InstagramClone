import { Image, Dimensions } from "react-native";

function FitImage({ media }) {

    

    const width = Dimensions.get('window').width;
    const ratio = 1080/width;
    const height = 500;

    return(
        <Image 
            style={{
                width,
                height
            }}
            source={{
                uri: media.src
            }}
        />
    )
}

export default FitImage;