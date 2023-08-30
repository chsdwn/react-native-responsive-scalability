import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

type Props = {
  children: React.ReactNode;
};
export const Title = ({ children }: Props) => {
  const { scaleByWidth } = useScale();

  return (
    <Text
      style={useStyle(
        () => [
          styles.title,
          {
            fontSize: scaleByWidth(32),
            lineHeight: scaleByWidth(48),
          },
        ],
        [scaleByWidth],
      )}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
