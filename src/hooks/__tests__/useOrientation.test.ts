import { renderHook } from '@testing-library/react-hooks';

import { mockLandscape, mockPortrait, wrapper } from '../../test/test-utils';
import { useOrientation } from '../useOrientation';

describe('[useOrientation]', () => {
  it('should return "portrait" when device\'s screen height bigger than screen width', () => {
    mockPortrait();
    const { result } = renderHook(() => useOrientation(), { wrapper });

    const orientation = result.current;

    expect(orientation).toBe('portrait');
  });

  it('should return "landscape" when device\'s screen width bigger than screen height', () => {
    mockLandscape();
    const { result } = renderHook(() => useOrientation(), { wrapper });

    const orientation = result.current;

    expect(orientation).toBe('landscape');
  });

  it("should update the orientation when device's orientation changes", () => {
    mockPortrait();
    const { result, rerender } = renderHook(() => useOrientation(), {
      wrapper,
    });

    expect(result.current).toBe('portrait');

    mockLandscape();
    rerender();
    expect(result.current).toBe('landscape');

    mockPortrait();
    rerender();
    expect(result.current).toBe('portrait');
  });
});
