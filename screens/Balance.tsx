import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// colors
import { colors } from '../components/colors'

// types
import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
type Props = StackScreenProps<RootStackParamList, 'Balance'>

// components
import { Container } from '../components/shared'
import AmountSection from '../components/Balance/AmountSection'
import BalanceCardSection from '../components/Balance/BalanceCardSection'
import ButtonSection from '../components/Balance/ButtonSection'

const BalanceContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    padding: 25px;
    flex: 1;
`;

const Balance: React.FC<Props> = ({ route }) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance} />
            <BalanceCardSection {...route?.params} />
            <ButtonSection />
        </BalanceContainer>
    )
}

export default Balance