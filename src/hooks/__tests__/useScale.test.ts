import { renderHook } from '@testing-library/react-hooks';

import { mockLandscape, mockPortrait, wrapper } from '../../test/test-utils';
import { useScale } from '../useScale';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('[useScale]', () => {
  it('should scale size value by height', () => {
    mockPortrait();
    const { result } = renderHook(() => useScale(), { wrapper });

    const { scaleByHeight } = result.current;

    expect(scaleByHeight(10)).toBe(10);
  });

  it('should scale size value by width', () => {
    mockPortrait();
    const { result } = renderHook(() => useScale(), { wrapper });

    const { scaleByWidth } = result.current;

    expect(scaleByWidth(10)).toBe(10);
  });

  it('should scale size value by height on landscape mode', () => {
    mockPortrait();
    const { result } = renderHook(() => useScale(), {
      wrapper,
      initialProps: { config: { baseOrientation: 'landscape' } },
    });

    const { scaleByHeight } = result.current;

    expect(scaleByHeight(10)).toBe(4.5);
  });

  it('should scale size value by width on landscape mode', () => {
    mockPortrait();
    const { result } = renderHook(() => useScale(), {
      wrapper,
      initialProps: { config: { baseOrientation: 'landscape' } },
    });

    const { scaleByWidth } = result.current;

    expect(scaleByWidth(10)).toBe(10);
  });

  it('should recalculate the same value scaled by height even when the orientation changes', () => {
    mockPortrait();
    const { result, rerender } = renderHook(() => useScale(), { wrapper });

    mockLandscape();
    rerender();

    const { scaleByHeight: scaleByHeightLandscape } = result.current;
    expect(scaleByHeightLandscape(10)).toBe(10);
  });

  it('should recalculate the value scaled by width when the orientation changes', () => {
    mockPortrait();
    const { result, rerender } = renderHook(() => useScale(), { wrapper });

    mockLandscape();
    rerender();

    const { scaleByWidth: scaleByWidthLandscape } = result.current;
    expect(scaleByWidthLandscape(10)).toBe(9.5);
  });
});
