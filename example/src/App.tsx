import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  IResponsiveScalabilityConfig,
  ResponsiveScalabilityProvider,
} from 'react-native-responsive-scalability';

import { Home } from './screens';

const config: IResponsiveScalabilityConfig = {
  // # Change the baseWidth and baseHeight values according
  // to the dimensions of your base device.

  // # Default device: iPhone 14 Pro Max.
  // baseWidth: 430,
  // baseHeight: 932,

  breakpoints: {
    sm: 640,
    md: 940,
  },
};
export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveScalabilityProvider config={config}>
        <SafeAreaView style={styles.container}>
          <Home />
        </SafeAreaView>
      </ResponsiveScalabilityProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
