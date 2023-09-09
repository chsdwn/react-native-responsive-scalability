import { useMemo } from 'react';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const useSafeAreaWindow = () => {
  const { height, width } = useSafeAreaFrame();
  const { bottom, left, right, top } = useSafeAreaInsets();

  const windowHeight = useMemo(() => {
    return height - top - bottom;
  }, [height, bottom, top]);

  const windowWidth = useMemo(() => {
    return width - left - right;
  }, [width, left, right]);

  return {
    height: windowHeight,
    width: windowWidth,
  };
};
