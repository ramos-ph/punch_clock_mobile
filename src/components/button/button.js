import { moderateScale } from "react-native-size-matters";

import { ButtonContainer, ButtonText } from "./button.styles";

import theme from "../../styles/theme";

const getButtonSize = (size) => {
  const variantButtonSize = {
    small: moderateScale(5),
    regular: moderateScale(7),
    large: moderateScale(9),
  }
  return variantButtonSize[size] || moderateScale(7)
}

const getFontSize = (size) => {
  const variantFontSize = {
    small: theme.fontSizes.small,
    regular: theme.fontSizes.medium,
    large: theme.fontSizes.large,
  }
  return variantFontSize[size] || theme.fontSizes.medium
}

const Button = ({ variant = 'primary', size, onPress, title }) => (
  <ButtonContainer onPress={onPress} variant={variant} size={getButtonSize(size)}>
    <ButtonText variant={variant} size={getFontSize(size)}>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;
