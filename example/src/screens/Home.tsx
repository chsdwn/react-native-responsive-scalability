import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {
  useResponsiveScalability,
  useScale,
  useStyle,
} from 'react-native-responsive-scalability';

const boxHeight = 20;
const boxWidth = 20;
const fontSize = 16;
export const Home = () => {
  const { baseWidth, baseHeight, breakpoints } = useResponsiveScalability();
  const { scaleByHeight, scaleByWidth, scaleFontSizeByWidth } = useScale();
  const { height, width } = useWindowDimensions();

  const textStyle = useStyle(() => ({
    fontSize: scaleFontSizeByWidth(fontSize),
  }));

  const breakpointsText = Object.entries(breakpoints || {})
    .filter(([_, value]) => value)
    .map(([breakpoint, px]) => `${breakpoint}: ${px}`)
    .join(', ');

  return (
    <ScrollView>
      <Text style={textStyle}>
        Base width: {baseWidth} - Window width: {width}
      </Text>
      <Text style={textStyle}>
        Base height: {baseHeight} - Window height: {height}
      </Text>
      <Text style={textStyle}>
        Font size {fontSize} scaled to {scaleFontSizeByWidth(fontSize)}
      </Text>
      <Text style={textStyle}>Breakpoints: {breakpointsText}</Text>
      <Text style={textStyle}>
        Box height {boxHeight} scaled to {scaleByHeight(boxHeight)}
      </Text>
      <Text style={textStyle}>
        Box width {boxWidth} scaled to {scaleByWidth(boxWidth)}
      </Text>
      <View
        style={useStyle(
          () => [
            styles.box,
            { width: scaleByWidth(boxWidth), height: scaleByHeight(boxHeight) },
          ],
          [scaleByHeight, scaleByWidth],
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
  },
});
