import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import {
  useResponsiveScalability,
  useScale,
  useStyle,
} from 'react-native-responsive-scalability';

import { Description, PlaceholderImage, Title } from '../components';

const description = `      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus diam, vulputate id mi ut, ullamcorper euismod neque. Ut rutrum sollicitudin orci, eu tincidunt tortor aliquam at. Pellentesque blandit risus nec pulvinar faucibus. Etiam sed massa eu ligula ultrices ultricies. Praesent tincidunt mi et nisi sagittis, sed porttitor est maximus. Pellentesque auctor ut ipsum sit amet lobortis. Quisque feugiat iaculis est sit amet volutpat. Pellentesque tempus finibus laoreet. Integer pretium egestas sapien, vel venenatis turpis. Morbi vitae pulvinar massa. Fusce at posuere tellus. Etiam sit amet nunc scelerisque, lobortis nibh mattis, viverra eros. Suspendisse potenti. Fusce sodales suscipit ipsum nec viverra.

Donec tincidunt lectus ac tellus interdum, a accumsan tellus bibendum. Quisque aliquam vehicula ante, vel malesuada mauris feugiat id. Phasellus sodales purus a laoreet interdum. Nulla pulvinar faucibus turpis in molestie. Nunc molestie nulla at nunc posuere, sit amet consequat libero euismod. Quisque non nisl ac nisi vestibulum viverra. Sed vel lacus eget eros fringilla tempor a eu mi. Ut justo massa, feugiat ac metus rutrum, gravida molestie velit. Suspendisse viverra, lectus faucibus molestie pulvinar, orci orci dapibus elit, eget blandit mauris velit eget nisl. Duis ac dignissim diam. Curabitur a ornare augue. Quisque rutrum urna posuere ultricies pharetra. Nulla pharetra mollis felis at suscipit.`;

type Props = {
  onGoBackPress: () => void;
};
export const Article = ({ onGoBackPress }: Props) => {
  const { width } = useSafeAreaFrame();
  const { breakpoints } = useResponsiveScalability();
  const { scaleByWidth } = useScale();

  let textContentWidth = width;
  if (width >= breakpoints.sm) textContentWidth = width / 2;
  if (width >= breakpoints.md) textContentWidth = width / 3;
  if (breakpoints.lg && width >= breakpoints.lg) textContentWidth = width / 4;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PlaceholderImage />

      <View
        style={useStyle(
          () => ({
            paddingHorizontal: scaleByWidth(12),
            width: textContentWidth,
          }),
          [textContentWidth, scaleByWidth],
        )}
      >
        <Title>Lorem Ipsum</Title>
        <Description>{description}</Description>

        <TouchableOpacity
          onPress={onGoBackPress}
          style={useStyle(
            () => [
              styles.button,
              {
                marginTop: scaleByWidth(8),
                padding: scaleByWidth(12),
              },
            ],
            [textContentWidth, scaleByWidth],
          )}
        >
          <Text
            style={useStyle(
              () => [styles.buttonTitle, { fontSize: scaleByWidth(18) }],
              [scaleByWidth],
            )}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#999',
  },
  buttonTitle: {
    textAlign: 'center',
  },
});
