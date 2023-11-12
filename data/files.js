import RNFS from 'react-native-fs';


const root_path = RNFS.DocumentDirectoryPath + "/";

class Breeds {
    getAsync = async () => {
        const result = await RNFS.readFile(root_path + "breeds.txt");
        return JSON.parse(result);
    }
}

export default {
    Breeds: new Breeds()
}