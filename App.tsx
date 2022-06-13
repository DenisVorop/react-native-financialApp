import React from 'react'

// custom fonts
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

// react navigation
import RootStack from './navigators/RootStack'

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <RootStack />
    )
}
