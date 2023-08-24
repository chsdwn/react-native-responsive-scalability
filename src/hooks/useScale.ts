import { useCallback, useMemo } from 'react';
import { PixelRatio } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useResponsiveScalability } from './useResponsiveScalability';

export const useScale = () => {
  const { baseHeight, baseWidth, breakpoints } = useResponsiveScalability();
  const { height, width } = useSafeAreaFrame();

  const windowWidth = useMemo(() => {
    let divisor = 1;
    if (breakpoints?.sm && breakpoints.sm <= width) divisor = 2;
    if (breakpoints?.md && breakpoints.md <= width) divisor = 3;
    if (breakpoints?.lg && breakpoints.lg <= width) divisor = 4;
    if (breakpoints?.xl && breakpoints.xl <= width) divisor = 5;
    return width / divisor;
  }, [breakpoints, width]);

  const scaleByHeight = useCallback(
    (size: number) => {
      const windowHeight = Math.max(height, width);
      return PixelRatio.roundToNearestPixel(size * (windowHeight / baseHeight));
    },
    [baseHeight, height, width],
  );

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowWidth / baseWidth));
    },
    [baseWidth, windowWidth],
  );

  const scaleFontSizeByWidth = useCallback(
    (fontSize: number) => {
      return PixelRatio.roundToNearestPixel(
        (fontSize * windowWidth) / baseWidth,
      );
    },
    [baseWidth, windowWidth],
  );

  return { scaleByHeight, scaleByWidth, scaleFontSizeByWidth };
};
