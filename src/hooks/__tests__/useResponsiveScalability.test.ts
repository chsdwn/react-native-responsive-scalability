import { renderHook } from '@testing-library/react-hooks';

import { wrapper } from '../../test/test-utils';
import { useResponsiveScalability } from '../useResponsiveScalability';

describe('[useResponsiveScalability()]', () => {
  it('should detect baseHeight change', () => {
    let baseHeight = 700;
    const { rerender, result } = renderHook(() => useResponsiveScalability(), {
      wrapper,
      initialProps: { config: { baseHeight } },
    });
    expect(result.current.baseHeight).toBe(baseHeight);

    baseHeight = 800;
    rerender({ config: { baseHeight } });
    expect(result.current.baseHeight).toBe(baseHeight);
  });

  it('should detect baseWidth change', () => {
    let baseWidth = 300;
    const { rerender, result } = renderHook(() => useResponsiveScalability(), {
      wrapper,
      initialProps: { config: { baseWidth } },
    });
    expect(result.current.baseWidth).toBe(baseWidth);

    baseWidth = 400;
    rerender({ config: { baseWidth } });
    expect(result.current.baseWidth).toBe(baseWidth);
  });

  it('should detect breakpoints change', () => {
    let sm = 320;
    const { rerender, result } = renderHook(() => useResponsiveScalability(), {
      wrapper,
      initialProps: { config: { breakpoints: { sm } } },
    });
    expect(result.current.breakpoints.sm).toBe(sm);

    sm = 360;
    rerender({ config: { breakpoints: { sm } } });
    expect(result.current.breakpoints.sm).toBe(sm);
  });

  it('should detect orientation change', () => {
    let baseOrientation: 'portrait' | 'landscape' = 'portrait';
    const { rerender, result } = renderHook(() => useResponsiveScalability(), {
      wrapper,
      initialProps: { config: { baseOrientation } },
    });
    expect(result.current.baseOrientation).toBe(baseOrientation);

    baseOrientation = 'landscape';
    rerender({ config: { baseOrientation } });
    expect(result.current.baseOrientation).toBe(baseOrientation);
  });
});
