import { useCallback, useMemo } from 'react';
import { PixelRatio } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useResponsiveScalability } from './useResponsiveScalability';
import { useSafeAreaWindow } from './useSafeAreaWindow';

export const useScale = () => {
  const { height: frameHeight, width: frameWidth } = useSafeAreaFrame();
  const { width } = useSafeAreaWindow();
  const { baseHeight, baseWidth, baseOrientation, breakpoints } =
    useResponsiveScalability();

  const screenHeight = useMemo(() => {
    if (baseOrientation === 'portrait') {
      return Math.max(frameHeight, frameWidth);
    }
    return Math.min(frameHeight, frameWidth);
  }, [baseOrientation, frameHeight, frameWidth]);

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
      return PixelRatio.roundToNearestPixel(size * (screenHeight / baseHeight));
    },
    [baseHeight, screenHeight],
  );

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowWidth / baseWidth));
    },
    [baseWidth, windowWidth],
  );

  return { scaleByHeight, scaleByWidth };
};
