import React from 'react';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { WrapperComponent } from '@testing-library/react-hooks';

import { ResponsiveScalabilityProvider } from '../core';
import { IResponsiveScalabilityConfig } from '../types';

export const baseDimensions = {
  height: 932,
  width: 430,
};

export const portraitInsets = {
  bottom: 34,
  left: 0,
  right: 0,
  top: 59,
};

export const landscapeInsets = {
  bottom: 21,
  left: 59,
  right: 59,
  top: 0,
};

jest.mock('react-native-safe-area-context');
const useSafeAreaFrameMock = useSafeAreaFrame as jest.MockedFunction<
  typeof useSafeAreaFrame
>;
const useSafeAreaInsetsMock = useSafeAreaInsets as jest.MockedFunction<
  typeof useSafeAreaInsets
>;

const { height, width } = baseDimensions;
export const mockPortrait = () => {
  useSafeAreaFrameMock.mockImplementation(() => ({
    height,
    width,
    x: 0,
    y: 0,
  }));
  useSafeAreaInsetsMock.mockImplementation(() => portraitInsets);
};

export const mockLandscape = () => {
  useSafeAreaFrameMock.mockImplementation(() => ({
    height: width,
    width: height,
    x: 0,
    y: 0,
  }));
  useSafeAreaInsetsMock.mockImplementation(() => landscapeInsets);
};

export const wrapper: WrapperComponent<{
  config: IResponsiveScalabilityConfig;
}> = ({ config, children }) => (
  <ResponsiveScalabilityProvider config={config}>
    {children}
  </ResponsiveScalabilityProvider>
);
