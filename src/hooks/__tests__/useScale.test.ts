import { renderHook } from '@testing-library/react-hooks';

import {
  mockUseSafeAreaFrameLandscape,
  mockUseSafeAreaFramePortrait,
  wrapper,
} from '../../test/test-utils';
import { useScale } from '../useScale';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('[useScale]', () => {
  it('should scale size value by height', () => {
    mockUseSafeAreaFramePortrait();
    const { result } = renderHook(() => useScale(), { wrapper });

    const { scaleByHeight } = result.current;

    expect(scaleByHeight(10)).toBe(10);
  });

  it('should scale size value by width', () => {
    mockUseSafeAreaFramePortrait();
    const { result } = renderHook(() => useScale(), { wrapper });

    const { scaleByWidth } = result.current;

    expect(scaleByWidth(10)).toBe(10);
  });

  it('should scale size value by height on landscape mode', () => {
    mockUseSafeAreaFramePortrait();
    const { result } = renderHook(() => useScale(), {
      wrapper,
      initialProps: { config: { baseOrientation: 'landscape' } },
    });

    const { scaleByHeight } = result.current;

    expect(scaleByHeight(10)).toBe(4.5);
  });

  it('should scale size value by width on landscape mode', () => {
    mockUseSafeAreaFramePortrait();
    const { result } = renderHook(() => useScale(), {
      wrapper,
      initialProps: { config: { baseOrientation: 'landscape' } },
    });

    const { scaleByWidth } = result.current;

    expect(scaleByWidth(10)).toBe(10);
  });

  it('should recalculate the same value scaled by height even when the orientation changes', () => {
    mockUseSafeAreaFramePortrait();
    const { result, rerender } = renderHook(() => useScale(), { wrapper });

    const size = 10;
    const { scaleByHeight } = result.current;
    const portraitSize = scaleByHeight(size);

    mockUseSafeAreaFrameLandscape();
    rerender();

    const { scaleByHeight: scaleByHeightLandscape } = result.current;
    expect(scaleByHeightLandscape(size)).toBe(portraitSize);
  });

  it('should recalculate the value scaled by width when the orientation changes', () => {
    mockUseSafeAreaFramePortrait();
    const { result, rerender } = renderHook(() => useScale(), { wrapper });

    mockUseSafeAreaFrameLandscape();
    rerender();

    const { scaleByWidth: scaleByWidthLandscape } = result.current;
    expect(scaleByWidthLandscape(10)).toBe(11);
  });
});
