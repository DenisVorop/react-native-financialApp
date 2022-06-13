import React from 'react'

// react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import Greeting from '../components/Headers/Greeting'
import Profile from '../components/Headers/Profile'

// screens
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Balance from '../screens/Balance'

// colors
import { colors } from '../components/colors'

// image
import avi from '../assets/avi/avatar.png'
import { Ionicons } from '@expo/vector-icons'

// types
import { CardProps } from '../components/Cards/types'

export type RootStackParamList = {
    Welcome: undefined
    Home: undefined
    Balance: CardProps
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRight: () => (
                        <Profile
                            img={avi}
                            imgContainerStyle={{
                                backgroundColor: colors.tertiary
                            }}
                        />
                    ),
                    headerRightContainerStyle: {
                        paddingRight: 25,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    },
                }}
                initialRouteName="Welcome"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => (
                            <Greeting
                                mainText="Hey Denis!"
                                subText="Welcome back"
                                {...props}
                            />
                        ),
                        headerLeft: () => <></>,
                    }}
                />
                <Stack.Screen
                    name="Balance"
                    component={Balance}
                    options={({ route }) => ({
                        headerTitle: route?.params?.alias,
                        headerTitleAlign: "center",
                        headerBackImage: (props) => (
                            <Ionicons
                                {...props}
                                name="chevron-back"
                                size={25}
                                color={colors.secondary}
                            />
                        ),
                        headerLeftContainerStyle: {
                            paddingLeft: 0
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack
