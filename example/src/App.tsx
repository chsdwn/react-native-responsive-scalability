import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  IResponsiveScalabilityConfig,
  ResponsiveScalabilityProvider,
} from 'react-native-responsive-scalability';

import { Home } from './screens';

const config: IResponsiveScalabilityConfig = {
  breakpoints: {
    sm: 640,
    md: 940,
  },
};
export default function App() {
  return (
    <ResponsiveScalabilityProvider config={config}>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </ResponsiveScalabilityProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
