import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  IResponsiveScalabilityConfig,
  ResponsiveScalabilityProvider,
} from 'react-native-responsive-scalability';

import { Article, Articles } from './screens';

const config: IResponsiveScalabilityConfig = {
  // # Change the baseWidth and baseHeight values according to the dimensions
  // of your base device.

  // # Default device: iPhone 14 Pro Max.
  // baseWidth: 430,
  // baseHeight: 932,

  // # "landscape" option can be selected. Default base orientation is "portrait".
  // baseOrientation: 'portrait',

  breakpoints: {
    // # Default breakpoints
    // sm: 640,
    // md: 940,
    lg: 1280,
  },
};
export default function App() {
  const [screen, setScreen] = useState<'article' | 'articles'>('articles');

  const handleArticlePressed = () => {
    setScreen('article');
  };

  const handleGoBackPressed = () => {
    setScreen('articles');
  };

  return (
    <SafeAreaProvider>
      <ResponsiveScalabilityProvider config={config}>
        <SafeAreaView style={styles.container}>
          {screen === 'article' && (
            <Article onGoBackPress={handleGoBackPressed} />
          )}
          {screen === 'articles' && (
            <Articles onArticlePress={handleArticlePressed} />
          )}
        </SafeAreaView>
      </ResponsiveScalabilityProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});
