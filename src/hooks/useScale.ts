import { useCallback, useMemo } from 'react';
import { Dimensions, PixelRatio } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useResponsiveScalability } from './useResponsiveScalability';

const { height: initialHeight, width: initialWidth } = Dimensions.get('window');
const windowHeight = Math.max(initialHeight, initialWidth);

export const useScale = () => {
  const { width } = useSafeAreaFrame();
  const { baseHeight, baseWidth, breakpoints } = useResponsiveScalability();

  const windowWidth = useMemo(() => {
    let divisor = 1;
    if (breakpoints.sm <= width) divisor = 2;
    if (breakpoints.md <= width) divisor = 3;
    if (breakpoints?.lg && breakpoints.lg <= width) divisor = 4;
    if (breakpoints?.xl && breakpoints.xl <= width) divisor = 5;
    return width / divisor;
  }, [breakpoints, width]);

  const scaleByHeight = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowHeight / baseHeight));
    },
    [baseHeight],
  );

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowWidth / baseWidth));
    },
    [baseWidth, windowWidth],
  );

  return { scaleByHeight, scaleByWidth };
};
