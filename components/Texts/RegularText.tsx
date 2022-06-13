import React from 'react'
import styled from 'styled-components/native'

// colors
import { colors } from '../colors'

const StyledText = styled.Text`
    font-size: 15px;
    color: ${colors.white};
    text-align: left;
    font-family: Lato-Bold;
`;

// types
import { TextProps } from './types'

const RegularText: React.FC<TextProps> = (props) => {
    return (
        <StyledText style={props.textStyles}>
            {props.children}
        </StyledText>
    )
}

export default RegularText
