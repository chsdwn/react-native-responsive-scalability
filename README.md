<div align="center">
  <a name="title"></a>
  <h3 align="center">React Native Responsive Scalability</h3>
  
  <p align="center">
    The package provides utility hooks that help React Native developers create responsive, cross-platform applications that are aware of orientation changes.
    <br />
    <br />
    <a href="https://github.com/chsdwn/react-native-responsive-scalability/issues">Report Bug</a>
    ·
    <a href="https://github.com/chsdwn/react-native-responsive-scalability/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#peer-dependencies">Peer Dependencies</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#api">API</a>
      <ul>
        <li><a href="#responsivescalabilityprovider">ResponsiveScalabilityProvider</li>
        <li><a href="#useresponsivescalability">useResponsiveScalability</li>
        <li><a href="#usescale">useScale</li>
        <li><a href="#usestyle">useStyle</li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About the Project

The package provides utility hooks that help React Native developers create responsive, cross-platform applications that are aware of orientation changes.

## Getting Started

### Peer Dependencies

#### `react-native-safe-area-context`

```sh
npm install react-native-safe-area-context
```

```sh
yarn add react-native-safe-area-context
```

- (MacOS only) Install Cocoa packages

  ```sh
  npx pod-install
  ```

Add `<SafeAreaProvider>` in your app root component.

```tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return <SafeAreaProvider>...</SafeAreaProvider>;
};
```

### Installation

```sh
npm install react-native-responsive-scalability
```

```sh
yarn add react-native-responsive-scalability
```

- Add following rules to your eslint config file:

```json
{
  "rules": {
    "react-hooks/exhaustive-deps": [
      "error",
      {
        "additionalHooks": "(useStyle)"
      }
    ]
  }
}
```

<p align="right">(<a href="#title">back to top</a>)</p>

## Usage

For usage details, please refer to the `src` folder of the example app.

https://github.com/chsdwn/react-native-responsive-scalability/tree/main/example/src

<p align="right">(<a href="#title">back to top</a>)</p>

## API

### ResponsiveScalabilityProvider

You should to add `ResponsiveScalabilityProvider` in your app root component.

#### Props

`config`: Define your base device's dimensions, orientation, and breakpoints.

| Prop            | Type     |                                              Default |
| --------------- | -------- | ---------------------------------------------------: |
| baseHeight      | `number` |                                                `430` |
| baseWidth       | `number` |                                                `932` |
| baseOrientation | `string` |                                         `'portrait'` |
| breakpoints     | `object` | `{ sm: 640, md: 940, lg: undefined, xl: undefined }` |

#### Example

```tsx
import React from 'React';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  IResponsiveScalabilityConfig,
  ResponsiveScalabilityProvider,
} from 'react-native-responsive-scalability';

const config: IResponsiveScalabilityConfig = {
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
    xl: 1536,
  },
};

export const App = () => {
  return (
    <SafeAreaProvider>
      <ResponsiveScalabilityProvider config={config}>
        ...
      </ResponsiveScalabilityProvider>
    </SafeAreaProvider>
  );
};
```

### useResponsiveScalability

Use `useResponsiveScalability` hook to retrieve `baseHeight`, `baseWidth`, `baseOrientation`, and `breakpoints` values.

#### Example

```tsx
import React from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useResponsiveScalability } from 'react-native-responsive-scalability';

export const Home = () => {
  const { width } = useSafeAreaFrame();
  const { baseHeight, baseWidth, baseOrientation, breakpoints } =
    useResponsiveScalability();

  let numColumns = 1;
  if (width >= breakpoints.sm) numColumns = 2;

  return (
    <FlatList
      key={`flatlist-column-${numColumns}`}
      numColumns={numColumns}
      ...
    />
  );
};
```

### useScale

The `useScale` hook returns scale utility functions `scaleByHeight` and `scaleByWidth`. The `scaleByHeight` function is NOT aware of orientation changes; it calculates window height based on the `baseOrientation` value and uses it for calculating scale changes.

#### Example

```ts
import React from 'react';
import { useScale } from 'react-native-responsive-scalability';

const size = 10;

export const Home = () => {
  const { scaleByHeight, scaleByWidth } = useScale();

  console.log(`scaleByHeight(${size}) =`, scaleByHeight(size));
  console.log(`scaleByWidth(${size}) =`, scaleByWidth(size));

  return <></>;
};
```

- On a iPhone 14 Pro Max device/simulator with default config values.

  `Portrait Mode`

  ```
  scaleByHeight(16) = 16
  scaleByWidth(16) = 16
  ```

  `Landscape Mode`

  ```
  scaleByHeight(16) = 16
  scaleByWidth(16) = 17.333333333333332
  ```

### useStyle

Use `useStyle` hook to memoize inline styles.

#### Example

```tsx
import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

export const Text = () => {
  const { scaleByWidth } = useScale();

  return (
    <RNText
      style={useStyle(
        () => [styles.text, { fontSize: scaleByWidth(16) }],
        [scaleByWidth],
      )}
    >
      React Native Responsive Scalability
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: { color: 'red' },
});
```

<p align="right">(<a href="#title">back to top</a>)</p>

## Contributing

See the [contributing guide](https://github.com/chsdwn/react-native-responsive-scalability/blob/main/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

<p align="right">(<a href="#title">back to top</a>)</p>

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/chsdwn/react-native-responsive-scalability/blob/main/LICENSE) for more information.

<p align="right">(<a href="#title">back to top</a>)</p>

## Acknowledgments

- Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

<p align="right">(<a href="#title">back to top</a>)</p>
