import React from 'react'
import styled from 'styled-components/native'

// types
import { BalanceCardProps } from './types'

// components
import BalanceCard from './BalanceCard';

const BalanceCardSectionBackground = styled.View`
    width: 100%;
    flex: 2;
    align-items: center;
`;

const BalanceCardSection: React.FC<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    )
}

export default BalanceCardSection
