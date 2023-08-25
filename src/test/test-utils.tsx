import React from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { WrapperComponent } from '@testing-library/react-hooks';

import { ResponsiveScalabilityProvider } from '../core';
import { IResponsiveScalabilityConfig } from '../types';

export const baseDimensions = {
  height: 932,
  width: 430,
};

jest.mock('react-native-safe-area-context');
const useSafeAreaFrameMock = useSafeAreaFrame as jest.MockedFunction<
  typeof useSafeAreaFrame
>;

const { height, width } = baseDimensions;
export const mockUseSafeAreaFramePortrait = () => {
  useSafeAreaFrameMock.mockImplementation(() => ({
    height,
    width,
    x: 0,
    y: 0,
  }));
};
export const mockUseSafeAreaFrameLandscape = () => {
  useSafeAreaFrameMock.mockImplementation(() => ({
    height: width,
    width: height,
    x: 0,
    y: 0,
  }));
};

export const wrapper: WrapperComponent<{
  config: IResponsiveScalabilityConfig;
}> = ({ config, children }) => (
  <ResponsiveScalabilityProvider config={config}>
    {children}
  </ResponsiveScalabilityProvider>
);
