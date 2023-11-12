import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import BreedsScreen from '../screens/BreedsScreen';
import BreedScreen from '../screens/BreedScreen';

const Navigate = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                    screenOptions={{
                        headerStyle: styles.headerStyle,
                        headerTintColor: '#ddd',
                        headerTitleStyle: styles.headerTitleStyle
                    }}>
                <Stack.Screen
                        name="breeds"
                        component={ BreedsScreen }
                        options={{
                            title: "Breeds"
                        }}
                    />
                <Stack.Screen
                        name="breed"
                        component={ BreedScreen }
                        options={{
                            title: "Breed"
                        }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#333'
    },
    headerTitleStyle: {

    }
});

export default Navigate;