import React from 'react';
import { Text } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

type Props = {
  children: React.ReactNode;
};
export const Description = ({ children }: Props) => {
  const { scaleByWidth } = useScale();

  return (
    <Text
      style={useStyle(
        () => ({
          fontSize: scaleByWidth(18),
          lineHeight: scaleByWidth(27),
        }),
        [scaleByWidth],
      )}
    >
      {children}
    </Text>
  );
};
