import { DependencyList, useMemo } from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

export const useStyle = <TStyle extends ViewStyle | ImageStyle | TextStyle>(
  styleCb: () => StyleProp<TStyle>,
  deps?: DependencyList,
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => StyleSheet.flatten(styleCb()), deps);
};
