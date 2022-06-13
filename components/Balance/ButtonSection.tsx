import React from 'react'
import styled from 'styled-components/native'

// images
import { Ionicons } from '@expo/vector-icons'

// colors
import { colors } from '../colors'

// components
import RegularButton from '../Buttons/RegularButton'

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: React.FC = () => {
    return (
        <ButtonSectionBackground>
            <RegularButton btnStyles={{ width: "50%" }} onPress={() => { }}>
                Cancel <Ionicons size={17} name="card" color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    )
}

export default ButtonSection
