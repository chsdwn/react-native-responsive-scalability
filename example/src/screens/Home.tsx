import React, { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import {
  useResponsiveScalability,
  useScale,
  useStyle,
} from 'react-native-responsive-scalability';

const boxHeight = 100;
const boxWidth = 100;
const fontSize = 16;
export const Home = () => {
  const { baseWidth, baseHeight, baseOrientation, breakpoints } =
    useResponsiveScalability();
  const { scaleByHeight, scaleByWidth } = useScale();
  const { height, width } = useSafeAreaFrame();

  const textStyle = useStyle(() => ({
    fontSize: scaleByWidth(fontSize),
  }));

  const isWidthOverflowSmBreakpoint = useMemo(() => {
    return width >= breakpoints.sm;
  }, [width, breakpoints.sm]);

  const orientation = height > width ? 'Portrait' : 'Landscape';

  const breakpointsText = Object.entries(breakpoints || {})
    .filter(([_, value]) => value)
    .map(([breakpoint, px]) => `${breakpoint}: ${px}`)
    .join(', ');

  return (
    <View style={styles.container}>
      <Text
        style={useStyle(
          () => [styles.noteText, { fontSize: scaleByWidth(12) }],
          [scaleByWidth],
        )}
      >
        Change orientation to check style changes by breakpoints
      </Text>

      <View
        style={useStyle(
          () => [
            styles.gridContainer,
            { flexDirection: isWidthOverflowSmBreakpoint ? 'row' : 'column' },
          ],
          [isWidthOverflowSmBreakpoint],
        )}
      >
        <View
          style={useStyle(
            () => ({
              width: isWidthOverflowSmBreakpoint ? '50%' : '100%',
              marginBottom: isWidthOverflowSmBreakpoint ? 0 : scaleByWidth(16),
            }),
            [isWidthOverflowSmBreakpoint, scaleByWidth],
          )}
        >
          <Text style={textStyle}>
            Base width: {baseWidth} - Window width: {width}
          </Text>
          <Text style={textStyle}>
            Base height: {baseHeight} - Window height: {height}
          </Text>
          <Text style={textStyle}>
            Base orientation: {baseOrientation} - Device orientation:{' '}
            {orientation}
          </Text>
          <Text style={textStyle}>
            Font size {fontSize} scaled to {scaleByWidth(fontSize)}
          </Text>
          <Text style={textStyle}>Breakpoints: {breakpointsText}</Text>
        </View>

        <View
          style={useStyle(
            () => ({ width: isWidthOverflowSmBreakpoint ? '50%' : '100%' }),
            [isWidthOverflowSmBreakpoint],
          )}
        >
          <Text style={textStyle}>
            Box height {boxHeight} scaled to {scaleByHeight(boxHeight)}
          </Text>
          <Text style={textStyle}>
            Box width {boxWidth} scaled to {scaleByHeight(boxWidth)}
          </Text>
          <View
            style={useStyle(
              () => [
                styles.box,
                {
                  width: scaleByHeight(boxWidth),
                  height: scaleByHeight(boxHeight),
                },
              ],
              [scaleByHeight],
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
  gridContainer: {
    flex: 1,
    margin: 4,
  },
  box: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'blue',
  },
});
