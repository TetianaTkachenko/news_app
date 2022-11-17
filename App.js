import { View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import Navigate from './navigate';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontLoaded, setFont] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
          'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf')
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setFont(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Navigate />
    </View>
  )
}
