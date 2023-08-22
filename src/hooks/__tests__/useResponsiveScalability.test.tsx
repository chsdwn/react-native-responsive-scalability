import React from 'react';
import { renderHook, WrapperComponent } from '@testing-library/react-hooks';

import { ResponsiveScalabilityProvider } from '../../core';
import { IResponsiveScalabilityConfig } from '../../types';
import { useResponsiveScalability } from '../useResponsiveScalability';

const wrapper: WrapperComponent<{
  config: IResponsiveScalabilityConfig;
}> = ({ config, children }) => (
  <ResponsiveScalabilityProvider config={config}>
    {children}
  </ResponsiveScalabilityProvider>
);

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
});
