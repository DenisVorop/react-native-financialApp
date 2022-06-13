import React from 'react'
import styled from 'styled-components/native'

// colors
import { colors } from '../colors'

const StyledText = styled.Text`
    font-size: 13px;
    color: ${colors.gray};
    text-align: left;
    font-family: Lato-Regular;
`;

// types
import { TextProps } from './types'

const SmallText: React.FC<TextProps> = (props) => {
    return (
        <StyledText style={props.textStyles}>
            {props.children}
        </StyledText>
    )
}

export default SmallText
