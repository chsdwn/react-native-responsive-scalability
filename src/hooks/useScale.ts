import { useCallback, useMemo } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

import { useResponsiveScalability } from './useResponsiveScalability';

export const useScale = () => {
  const { baseHeight, baseWidth, breakpoints } = useResponsiveScalability();
  const { fontScale, height, scale, width } = useWindowDimensions();

  const windowHeight = useMemo(() => {
    const isPortrait = width < height;
    const heightByRotation = isPortrait ? height : width;
    return heightByRotation;
  }, [height, width]);

  const windowWidth = useMemo(() => {
    const isPortrait = width < height;
    const widthByRotation = isPortrait ? width : height;

    let divisor = 1;
    if (breakpoints?.sm && breakpoints.sm <= widthByRotation) divisor = 2;
    if (breakpoints?.md && breakpoints.md <= widthByRotation) divisor = 3;
    if (breakpoints?.lg && breakpoints.lg <= widthByRotation) divisor = 4;
    if (breakpoints?.xl && breakpoints.xl <= widthByRotation) divisor = 5;
    return widthByRotation / divisor;
  }, [breakpoints, height, width]);

  const scaleByHeight = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(
        size * (windowHeight / baseHeight) * scale,
      );
    },
    [baseHeight, scale, windowHeight],
  );

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(
        size * (windowWidth / baseWidth) * scale,
      );
    },
    [baseWidth, scale, windowWidth],
  );

  const scaleFontSizeByWidth = useCallback(
    (fontSize: number) => {
      return PixelRatio.roundToNearestPixel(
        fontSize * (windowWidth / baseWidth) * fontScale,
      );
    },
    [baseWidth, fontScale, windowWidth],
  );

  return { scaleByHeight, scaleByWidth, scaleFontSizeByWidth };
};
