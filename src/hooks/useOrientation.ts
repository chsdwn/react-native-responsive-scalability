import { useMemo } from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { IOrientation } from '../types';

export const useOrientation = () => {
  const { height, width } = useSafeAreaFrame();

  const orientation: IOrientation = useMemo(() => {
    return height > width ? 'portrait' : 'landscape';
  }, [height, width]);

  return orientation;
};
