import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'

// colors
import { colors } from '../components/colors'

// images
import logo1 from '../assets/cards/visa_white.png'
import logo2 from '../assets/cards/mc.png'

import portrait1 from '../assets/portraits/1.jpeg'
import portrait2 from '../assets/portraits/2.jpeg'
import portrait3 from '../assets/portraits/3.jpeg'

// types
import { CardProps } from '../components/Cards/types'
import { TransactionProps } from '../components/Transactions/types'
import { SendMoneyProps } from '../components/SendMoney/types'

import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
export type Props = StackScreenProps<RootStackParamList, "Home">

// components
import { Container } from '../components/shared'
import CardSection from '../components/Cards/CardSection'
import TransactionSection from '../components/Transactions/TransactionSection'
import SendMoneySection from '../components/SendMoney/SendMoneySection'

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`

const Home: React.FC<Props> = () => {
    const cardsData: CardProps[] = [
        {
            id: 1,
            accountNo: '3845757744',
            balance: 20000.15,
            alias: 'Work Debit',
            logo: logo1
        },
        {
            id: 2,
            accountNo: '3845832356',
            balance: 12000.01,
            alias: 'Personal Prepaid',
            logo: logo2
        },
        {
            id: 3,
            accountNo: '3845921583',
            balance: 5600.03,
            alias: 'School Prepaid',
            logo: logo1
        },
        {
            id: 4,
            accountNo: '3846132548',
            balance: 12543.43,
            alias: 'Work Debit',
            logo: logo1
        },
    ]

    const transactionData: TransactionProps[] = [
        {
            id: 1,
            amount: '-$86.00',
            date: '13 June 2022',
            title: 'Taxi',
            subtitle: 'Uber car',
            art: {
                background: colors.primary,
                icon: 'car',
            },
        },
        {
            id: 2,
            amount: '-$286.00',
            date: '13 June 2022',
            title: 'Shooping',
            subtitle: 'AliExpress',
            art: {
                background: colors.tertiary,
                icon: 'cart',
            },
        },
        {
            id: 3,
            amount: '-$586.00',
            date: '13 May 2022',
            title: 'Travel',
            subtitle: 'Emirates',
            art: {
                background: colors.accent,
                icon: 'airplane',
            },
        },
    ]

    const sendMoneyData: SendMoneyProps[] = [
        {
            id: 1,
            amount: '2450.56',
            name: 'Coby Andoh',
            background: colors.tertiary,
            img: portrait1,
        },
        {
            id: 1,
            amount: '4450.34',
            name: 'Harleen Scot',
            background: colors.primary,
            img: portrait2,
        },
        {
            id: 1,
            amount: '6250.78',
            name: 'James Corbyn',
            background: colors.accent,
            img: portrait3,
        },
    ]

    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
        </HomeContainer>
    )
}

export default Home
