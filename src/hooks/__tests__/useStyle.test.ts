import { renderHook } from '@testing-library/react-hooks';

import { useStyle } from '../useStyle';

describe('[useStyle]', () => {
  it('should flatten and override array of styles', () => {
    const width = 10;
    const height = 20;
    const { result } = renderHook(() =>
      useStyle(() => [{ width, height: 10 }, { height }]),
    );

    const styles = result.current;
    expect(Object.keys(styles)).toHaveLength(2);
    expect(styles.width).toBe(width);
    expect(styles.height).toBe(height);
  });
});
