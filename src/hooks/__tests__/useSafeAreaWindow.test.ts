import { renderHook } from '@testing-library/react-hooks';

import {
  baseDimensions,
  landscapeInsets,
  portraitInsets,
  mockLandscape,
  mockPortrait,
  wrapper,
} from '../../test/test-utils';
import { useSafeAreaWindow } from '../useSafeAreaWindow';

describe('[useSafeAreaWindow]:', () => {
  it("should return device's window dimensions on portrait mode", () => {
    mockPortrait();
    const { result } = renderHook(() => useSafeAreaWindow(), { wrapper });

    const { bottom, left, right, top } = portraitInsets;
    const { height, width } = result.current;

    const windowHeight = baseDimensions.height - bottom - top;
    expect(windowHeight).toBe(height);

    const windowWidth = baseDimensions.width - left - right;
    expect(width).toBe(windowWidth);
  });

  it("should return device's window dimensions on landscape mode", () => {
    mockLandscape();
    const { result } = renderHook(() => useSafeAreaWindow(), { wrapper });

    const { bottom, left, right, top } = landscapeInsets;
    const { height, width } = result.current;

    const windowHeight = baseDimensions.width - bottom - top;
    expect(windowHeight).toBe(height);

    const windowWidth = baseDimensions.height - left - right;
    expect(width).toBe(windowWidth);
  });
});
