import styled, { css } from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

const buttonContainerModifiers = {
  primary: theme => css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    border-width: ${moderateScale(1)}px;
  `,
  secondary: theme => css`
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.primary};
    border-width: ${moderateScale(1)}px;
  `,
  ghost: theme => css`
    background-color: ${theme.colors.accent};
    border-color: transparent;
    border-width: ${moderateScale(1)}px;
  `,
};

const buttonTextModifiers = {
  primary: theme => css`
    color: ${theme.colors.accent};
  `,
  secondary: theme => css`
    color: ${theme.colors.primary};
  `,
  ghost: theme => css`
    color: ${theme.colors.primary};
  `,
};

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme, variant, size }) => css`
    margin-bottom: ${theme.spacing.s}px;
    justify-content: center;
    padding: ${size}px;
    border-radius: ${moderateScale(8)}px;

    ${buttonContainerModifiers[variant](theme)};
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme, variant, size }) => css`
    font-size: ${size}px;
    text-align: center;

    ${buttonTextModifiers[variant](theme)};
  `}
`;
