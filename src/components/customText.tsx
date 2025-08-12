import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface CustomTextProps extends TextProps {
  fontFamily?: string;
  style?: TextStyle | TextStyle[];
}

const CustomText: React.FC<CustomTextProps> = ({
  style,
  children,
  fontFamily = 'Rubik',
  ...props
}) => {
  return (
    <Text {...props} style={[{ fontFamily }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
