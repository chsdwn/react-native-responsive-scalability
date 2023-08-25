import { useCallback, useMemo } from 'react';
import { PixelRatio } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useResponsiveScalability } from './useResponsiveScalability';

export const useScale = () => {
  const { height, width } = useSafeAreaFrame();
  const { baseHeight, baseWidth, baseOrientation, breakpoints } =
    useResponsiveScalability();

  const windowHeight = useMemo(() => {
    if (baseOrientation === 'portrait') return Math.max(height, width);
    return Math.min(height, width);
  }, [baseOrientation, height, width]);

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
    [baseHeight, windowHeight],
  );

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowWidth / baseWidth));
    },
    [baseWidth, windowWidth],
  );

  return { scaleByHeight, scaleByWidth };
};
