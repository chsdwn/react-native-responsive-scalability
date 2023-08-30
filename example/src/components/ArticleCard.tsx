import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { Description } from './Description';
import { Title } from './Title';

type Props = {
  title: string;
  description: string;
  onPress: () => void;
};
export const ArticleCard = ({ title, description, onPress }: Props) => {
  const { scaleByWidth } = useScale();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={useStyle(
        () => [
          styles.card,
          {
            margin: scaleByWidth(8),
            paddingVertical: scaleByWidth(4),
            paddingHorizontal: scaleByWidth(8),
          },
        ],
        [scaleByWidth],
      )}
    >
      <Title>{title}</Title>
      <Description>{`   ${description}`}</Description>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#bbb',
  },
});
