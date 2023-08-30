import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useScale, useStyle } from 'react-native-responsive-scalability';

export const PlaceholderImage = () => {
  const { height, width } = useSafeAreaFrame();
  const { scaleByHeight } = useScale();

  return (
    <View
      style={useStyle(
        () => [
          styles.image,
          {
            width: Math.max(height, width),
            height: scaleByHeight(150),
          },
        ],
        [height, width, scaleByHeight],
      )}
    >
      <View
        style={useStyle(
          () => [
            styles.circle,
            {
              width: scaleByHeight(50),
              height: scaleByHeight(50),
              top: scaleByHeight(-35),
            },
          ],
          [scaleByHeight],
        )}
      />
      <View
        style={useStyle(
          () => [
            styles.triangle,
            {
              borderLeftWidth: scaleByHeight(60),
              borderRightWidth: scaleByHeight(60),
              borderBottomWidth: scaleByHeight(90),
              bottom: scaleByHeight(-10),
            },
          ],
          [scaleByHeight],
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  circle: {
    borderRadius: 1000,
    backgroundColor: '#333',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#333',
  },
});
