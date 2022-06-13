import React from 'react'
import styled from 'styled-components/native'

// colors
import { colors } from '../colors';

// types
import { SendMoneyProps } from './types'

// components
import { ScreenWidth } from '../shared';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import Profile from '../Headers/Profile';

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * .27}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
    margin: 0 10px;
`;

const SendMoneyItem: React.FC<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => alert('send money')}
        >
            <>
                <Profile
                    img={props.img}
                    imgContainerStyle={{ marginBottom: 10 }}
                />
                <SmallText textStyles={{
                    textAlign: "left",
                    color: colors.white,
                    fontSize: 12,
                }}>
                    {props.name}
                </SmallText>
                <RegularText textStyles={{
                    textAlign: "left",
                    color: colors.white,
                    fontSize: 13,
                }}>
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    )
}

export default SendMoneyItem
