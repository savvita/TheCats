import React from 'react';
import Navigate from './components/Navigate';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

function App(): JSX.Element {
  useEffect(() => {
    // hideSplashScreen(500);
    SplashScreen.hide();
    //prepare();
  }, []);

  // const hideSplashScreen = async (delay: number) => {
  //   await new Promise(resolve => setTimeout(resolve, delay));
  //   SplashScreen.hide();
  // }

  // const prepare = async () => {
  //   try {
  //     await Font.loadAsync({
  //       'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  //       'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  //     });
  //   } catch(e) {
  //     console.warn(e);
  //   } finally {
  //     SplashScreen.hide();
  //   }
  // }

  return (
    <Navigate />
  );
}

export default App;
